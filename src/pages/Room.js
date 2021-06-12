import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../AuthService'
import firebase from '../config/firebase'

const Room = () => {
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])
    const user = useContext(AuthContext)
    console.log(user)
    useEffect(() => {
        firebase.firestore().collection("messages").onSnapshot(snapshot => {
            const messages = snapshot.docs.map(doc => {
                // return {
                //     user: doc.data().user,
                //     content: doc.data().content,
                //     id: doc.id
                // }
                //　↑の方法もある。場合によって使い分ける
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            //messageのオブジェクトは{user: aaa, content: bbb, id: 123456789}
            setMessages(messages)
        });
    }, [])

    const handleSubmit = (e => {
        e.preventDefault()
        firebase.firestore().collection("messages").add({
            content: value,
            user: user.displayName,
            created: firebase.firestore.FieldValue.serverTimestamp()
        })
    })
    return (
        <>
            <h2>Room</h2>
            <ul>
                {
                    messages.map(message => (
                        <li key={message.id}><span>{message.user}</span><p>{message.content}</p></li>
                    ))
                }
                
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
            <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
        </>
    )
}

export default Room



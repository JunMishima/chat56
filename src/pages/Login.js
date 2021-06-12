import { useState } from "react"
import { Redirect } from "react-router"
import firebase from '../config/firebase'
import {useContext} from 'react'
import {AuthContext} from '../AuthService'

const Login = ({history}) => {
    // signUpボタンを押した際に、下記の変数で入力値がconsol.に表示できるようにしてみてください。
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //login コンポーネントが表示された際にログインされていたら、Roomコンポーネントを表示してみてください
    const user = useContext(AuthContext)
    if (user) {
        return <Redirect to='/' />
    }
    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                history.push('/')
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login
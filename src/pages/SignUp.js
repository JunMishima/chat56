import { useState } from "react"
import firebase from '../config/firebase'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name,setName] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(({user}) => {
            user.updateProfile({
                displayName: name
            })
        }) 
        .catch(err => {
            console.error(err)
            setError(err.message)
        })

        console.log('test')
    }
    return (
        <>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                {error && (<p>{error}</p>)}
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        name='email' 
                        type='email' 
                        id='email' 
                        placeholder='email' 
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        name='password' 
                        type='password' 
                        id='password' 
                        placeholder='Password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input   
                        name='name' 
                        type='text'
                        id='name'
                        placeholder='name'
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp
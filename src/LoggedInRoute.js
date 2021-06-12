import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from './AuthService'

const LoggedInRoute = ({ component: Component, ...rest }) => {
    console.log(rest)
    // userにはログインしていたらログインユーザーのオブジェクト、未ログインの場合はnullになる
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={props =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    )

}
export default LoggedInRoute
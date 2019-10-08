import React, { useRef } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import { Form, Label, Button } from "semantic-ui-react"


const Login = props => {
    const username = useRef()
    const password = useRef()
    const { login } = useSimpleAuth()

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the username and password that
            the customer enters into local storage.
        */
        const credentials = {
            "username": username.current.value,
            "password": password.current.value
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

    return (
        <main style={{textAlign:"center"}}>
            <Form className="form--login">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Form.Field>
                    <Label htmlFor="username"> Username </Label>
                    <input ref={username} type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="inputPassword"> Password </Label>
                    <input ref={password} type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </Form.Field>
                <Form.Field>
                    <Button onClick={handleLogin}>
                        Sign in
                    </Button>
                </Form.Field>
                <Form.Field>
                Not a Member? <Link to="/register">Register Here</Link>
                </Form.Field>
            </Form>
        </main>
    )
}
 export default Login
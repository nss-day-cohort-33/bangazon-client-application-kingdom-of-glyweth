import React, { useRef } from "react"
import "./Login.css"
import userSimpleAuth from "../../hooks/ui/userSimpleAuth"
import { Form, Label, Input, Button } from "semantic-ui-react"


const Login = props => {
    const username = useRef()
    const password = useRef()
    const { login } = userSimpleAuth()

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
                    <Label htmlFor="inputEmail"> Email address </Label>
                    <Input ref={username} type="username"
                        className="form-control"
                        placeholder="Email address"
                        required autoFocus />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="inputPassword"> Password </Label>
                    <Input ref={password} type="password"
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
            </Form>
        </main>
    )
}
 export default Login
import React from "react"
import { Link } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import { Menu, Container, Dropdown } from 'semantic-ui-react'



const NavBar = props => {
//   const { isAuthenticated, logout } = useSimpleAuth()

    return (
        <Menu size="large" >
            <Container>
                <Menu.Item as={Link} to="/" header>
                    Home
                </Menu.Item>

                <Menu.Item as={Link} to="/" position='right'>
                    Categories
                </Menu.Item>

                <Menu.Item as={Link} to="/" >
                    Sell A Product
                </Menu.Item>

                <Dropdown item simple text='My Settings' >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/">Profile</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/">My Orders</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/">Reports</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                <Menu.Item as={Link} to="/" >
                    Logout
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
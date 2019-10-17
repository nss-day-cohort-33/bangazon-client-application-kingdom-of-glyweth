import React, { useState } from "react"
import { Link } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { Menu, Image, Dropdown, MenuMenu } from "semantic-ui-react"
import logo from "../../images/B.png"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

//SN- Simple navigation bar, please add your routes as you create new pages.

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()
    const [order, setOrder] = useState([])

    //   useEffect(() => {
    //       if (isAuthenticated()){
    //           getCurrentOrder();
    //       }
    //   }, []);

    const getCurrentOrder = props => {
        return fetch(`http://localhost:8000/orderproducts`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
            .then(data => {
                const currentOrder = data.filter(
                    filterOrder =>
                        filterOrder.order.payment === null &&
                        filterOrder.order.customer.url ===
                            `http://localhost:8000/customers/${localStorage.getItem(
                                "customer_id"
                            )}`
                )
                setOrder(currentOrder)
            })
    }
    return (
        <Menu size="large">
            <Menu.Item as={Link} to="/">
                <Image src={logo} size="mini" />
            </Menu.Item>

            <Menu.Item as={Link} to="/" header>
                Home
            </Menu.Item>

            <Menu.Item as={Link} to="/product_category" position="right">
                Categories
            </Menu.Item>

            <Menu.Item as={Link} to="/sellproducts">
                Sell A Product
            </Menu.Item>

            <Dropdown item simple text="My Settings">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/myprofile">
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/">
                        My Orders
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/myProducts">
                        My Products
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/">
                        Reports
                    </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                {isAuthenticated() ? (
            <Menu.Item
              className="nav-link fakeLink"
              onClick={() => {
                logout();
                props.history.push({
                  pathname: "/"
                });
              }}
            >
              Logout
            </Menu.Item>
        ) : (
          <>
              <Menu.Item as={Link} to="/login">
                Login
            </Menu.Item>
          </>
        )}
                <Menu.Item as={Link} to="/cart" >
                    Cart
                </Menu.Item>
            ) : (
                <>
                    <Menu.Item as={Link} to="/login">
                        Login
                    </Menu.Item>
                </>
            )}
            <Menu.Item as={Link} to="/cart">
                Cart
            </Menu.Item>
        </Menu>
    )
}

export default NavBar

import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import logo from "../../images/B.png";
import React from "react"
// import useSimpleAuth from "../../hooks/ui/useSimpleAuth"


//SN- Simple navigation bar, please add your routes as you create new pages.

const NavBar = props => {
  return (
    <Menu size="large">
      <Menu.Item as={Link} to="/">
        <Image src={logo} size="mini" />
      </Menu.Item>

      <Menu.Item as={Link} to="/" header>
        Home
      </Menu.Item>

      <Menu.Item as={Link} to="/" position="right">
        Categories
      </Menu.Item>

      <Menu.Item as={Link} to="/sellproducts">
        Sell A Product
      </Menu.Item>

      <Dropdown item simple text="My Settings">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/">
            Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/">
            My Orders
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/">
            Reports
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item as={Link} to="/">
        Cart
      </Menu.Item>

      <Menu.Item as={Link} to="/">
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;

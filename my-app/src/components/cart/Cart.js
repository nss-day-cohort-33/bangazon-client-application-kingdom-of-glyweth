import React, {useState, useEffect} from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Cart = () => {
    const [orders, setOrders] = useState([])
    const { isAuthenticated } = useSimpleAuth()
    const getOrders = () => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/order`, {
                "method": "GET",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                .then(setOrders)
        }
    }

    useEffect(getOrders,[])

    return (
        <>
        <h1>HEY THIS IS CART</h1>
        {orders.map(order=> {
            return <li key={order.id}>{order.id}</li>
        })}
        </>
    )
}

export default Cart
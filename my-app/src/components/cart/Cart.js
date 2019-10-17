import React, {useState, useEffect, useRef} from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Cart = () => {
    const [orders, setOrders] = useState([])
    const [payments, setPayments] = useState([])
    const paymentType = useRef()
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
    const getPayments = () => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/payment?customer=current`, {
                "method": "GET",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                .then(setPayments)
        }
    }
    const handlePayment = (id) => {
        const newPayment = {
            "order_id": id,
            "payment_id": +paymentType.current.firstChild.id
        }
        console.log("payment id", newPayment )
    }

    useEffect(() => {
        getOrders()
        getPayments()
    },[])

    console.log(orders)
    return (
        <>
        <h1>HEY THIS IS CART</h1>
        {orders.map(order=> {
            return(
            <div>
            <li key={order.id}>{order.id}</li>
            <button onClick={()=>handlePayment(order.id)}>Ready to Checkout</button>
            </div>)
        })}
        <select ref={paymentType}>
            {payments.map(payment => {
                return <option id={payment.id} key={payment.id}>{payment.merchant_name.toUpperCase()} .... {payment.account_number.slice(-4)}</option>
            })}
        </select>
        </>
    )
}

export default Cart
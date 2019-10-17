import React, { useState, useEffect, useRef } from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Cart = () => {
    const [orders, setOrders] = useState([])
    const [payments, setPayments] = useState([])
    const paymentType = useRef()
    const { isAuthenticated } = useSimpleAuth()
    const getOrders = () => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/order?payment_id=None`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${localStorage.getItem(
                        "bangazon_token"
                    )}`
                }
            })
                .then(response => response.json())
                .then(order => {
                    setOrders(order)
                })
        }
    }
    const getPayments = () => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/payment?customer=current`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${localStorage.getItem(
                        "bangazon_token"
                    )}`
                }
            })
                .then(response => response.json())
                .then(setPayments)
        }
    }
    const handlePayment = id => {
        const newPayment = {
            payment_id: +paymentType.current.firstChild.id
        }
        console.log("added payment", newPayment)
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/order/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${localStorage.getItem(
                        "bangazon_token"
                    )}`
                },
                body: JSON.stringify(newPayment)
            })
        }
    }

    useEffect(() => {
        getOrders()
        getPayments()
    }, [])

    const deleteProductFromCart = item_id => {
        fetch(`http://localhost:8000/order/${orders[0].id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("bangazon_token")}`
            },
            body: JSON.stringify({
                payment_id: null,
                item_id: item_id
            })
        }).then(getOrders)
    }

    return (
        <>
            <h1>My Cart:</h1>
            {orders.map(order => {
                return (
                    <>
                        {order.line_items.map(item => {
                            return (
                                <div>
                                    <div
                                        class="card"
                                        style={{
                                            margin: "2em",
                                            width: "22rem"
                                        }}
                                    >
                                        <div class="card-body">
                                            <h2 class="card-name">
                                                <strong>{item.name}</strong>
                                            </h2>
                                            <div class="card-text">
                                                <strong>Price:</strong>
                                                {item.price}
                                            </div>
                                            <br></br>
                                            <button
                                                class="btn btn-danger"
                                                onClick={() =>
                                                    deleteProductFromCart(
                                                        item.id
                                                    )
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            <select ref={paymentType}>
                                {payments.map(payment => {
                                    return (
                                        <option
                                            id={payment.id}
                                            key={payment.id}
                                        >
                                            {payment.merchant_name.toUpperCase()}{" "}
                                            ....{" "}
                                            {payment.account_number.slice(-4)}
                                        </option>
                                    )
                                })}
                            </select>
                            <button onClick={() => handlePayment(order.id)}>
                                Ready to Checkout
                            </button>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Cart

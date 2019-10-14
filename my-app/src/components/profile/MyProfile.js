import React, { useState, useEffect, useRef } from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import { Link } from "react-router-dom"
import { statement } from "@babel/template"


//  Given the user is authenticated
//  When the user clicks on a profile affordance in the navigation bar
//  And the user clicks on the Add Payment Option hyperlink in their profile
//  Then the user can fill out the payment option form
//  And click Submit to save payment option

//  Given the user is authenticated
//  When the user performs a gesture on the My Settings hyperlink in the navigation bar
//  And the user clicks on Payment Options
//  And the user clicks on the Delete hyperlink next to a payment type
//  Then the payment option will get deleted

//  Given a user is entering a payment type
//  When the user clicks the affordance to save the payment type
//  And the expiration date is prior to the current date
//  Then the user should be notified that the expiration date is invalid
//  And the record should not be added

const MyProfile = props => {

    const [payments, setPayments] = useState([])
    const { isAuthenticated } = useSimpleAuth()

    const getPayment = () => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/payment`, {
                "method": "GET",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                .then(setPayments)
        }
    }

    useEffect(getPayment, [])

    const handleDeleteButton = (id) => {
        const confirm = window.confirm("Are you sure you wish to remove this?")
        if(confirm === true){
            console.log(id)
            fetch(`http://localhost:8000/payments/${id}`, {
                "method": "Delete",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
            .then(() => {
                getPayment()
            })

            } else {
            console.log("false works")
        }
    }

    // console.log("customers", customers)
    console.log("payments", payments)
    return (
        <>
        <h2>Payment Types</h2>
        <Link to="/paymentform">Add New Payment</Link>
        <br></br>
        <Link to="/paymentoptions">Delete Payment</Link>
        <ul>
        {
            payments.map((payment) => {
                return<li key={payment.id} id={payment.id} style={{ listStyleType: "none" }}>
                    <strong>Merchant:</strong> {payment.merchant_name}
                    <br></br>
                    <strong>Card Number:</strong> {payment.account_number}
                    <br></br>
                    <strong>Expiration Date:</strong> {payment.expiration_date}
                    <br></br>
                </li>
            })
        }
        </ul>
        {/* {
            customer.map((customer) => {
            return<h1>{customer} Profile</h1>


        })
        } */}
        </>
    )
}

export default MyProfile
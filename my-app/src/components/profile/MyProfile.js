import React, { useState, useEffect, useRef } from "react"
import userSimpleAuth from "../../hooks/ui/userSimpleAuth"


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

    const [customer, setCustomers] = useState([])
    const [payments, setPaymets] = useState([])
    const { isAuthenticated } = userSimpleAuth()

    const getCustomers = () => {
        const customerid = ""
       if (isAuthenticated()) {
           fetch(`http://localhost:8000/customers/${customerid}`, {
               "method": "GET",
               "headers": {
                   "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
               }
           })
           .then(response => response.json())
           .then(setCustomers)
    }
}
}
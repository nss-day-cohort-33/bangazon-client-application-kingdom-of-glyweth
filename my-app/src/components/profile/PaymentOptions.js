import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import Payment from "./Payment"

// By Alex Rumsey
// Purpose: Gets payment options by customer ID, then displays payment options in a list titled "Payment".

const PaymentOptions = props => {
    const [paymentOptions, setPayment] = useState([])
    const { isAuthenticated } = useSimpleAuth()

    const getPayment = () => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/payment?customer=${localStorage.getItem("id")}`, {
                "method": "GET",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                .then(setPayment)
        }
    }

    useEffect(getPayment, [])

    return (
        <>
            {
              paymentOptions.length > 0 ?
              <>
                <h1>Payment Options</h1>
                <article className="paymentList">
                    {
                        paymentOptions.map(payment=>
                            <Payment key={payment.id} payment={payment} getPayment={getPayment} />
                        )
                    }
                </article>
              </>
              :
              <>
                <Link className="nav-link" to="/paymentform">
                  <h6>Add some Payment Options!</h6>
                </Link>
              </>
            }
        </>
    )
}

export default PaymentOptions
import React, { useRef, useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import moment from 'moment';

const AddPaymentForm = props => {

    const merchant_name = useRef()
    const account_number = useRef()
    const expiration_date = useRef()


    // const currentDate = moment().format("YYYY/MM/DD");
    // const expiration = new Date(expiration_date.current.value)
    const today = new Date().setHours(0,0,0,0)

    const addPayment = () => {
        fetch('http://localhost:8000/payment', {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            "body": JSON.stringify({
                "ride_id": props.ride.id,
            })
        })
        .then(response => response.json())
        .then(() => {
            console.log("Added")
            const newPayment ={
                "merchant_name": merchant_name.current.value,
                "account_number": account_number.current.value,
                "expiration_date": expiration_date.current.value,
                // "customer":

            }
            props.history.push("/myprofile")
        })
    }


    const submitPayment = (e) => {
        e.preventDefault()
        console.log(new Date(expiration_date.current.value))
        console.log("today", today)
        // console.log(Date.parse(new Date.expiration_date.current.value))

        if(new Date(expiration_date.current.value) < today) {
            alert("Please provide a card with a date in the future")
        } else{
            addPayment()
        }
    }

    return (
        <>
            <h2>Add a Payment</h2>
        <form>
            <fieldset>
                <label htmlFor="merchant_name"> Merchant </label>
                <input ref={merchant_name} type="text"
                    name="merchant_name"
                    className="form-control"
                    placeholder="Ex: Visa/Mastercard"
                    required autoFocus
                />
            </fieldset>
            <fieldset>
                <label htmlFor="account_number"> Account Number </label>
                <input ref={account_number} type="text"
                    name="account_number"
                    className="form-control"
                    placeholder="Ex: Visa/Mastercard"
                    required
                />
            </fieldset>
            <fieldset>
                <label htmlFor="expiration_date"> Expiration Date </label>
                <input ref={expiration_date} type="date"
                    name="expiration_date"
                    className="form-control"
                    placeholder="Ex: Visa/Mastercard"
                    required
                />
            </fieldset>
            <button onClick={submitPayment}> Add Payment </button>
        </form>
        </>
    )
}


export default withRouter(AddPaymentForm)
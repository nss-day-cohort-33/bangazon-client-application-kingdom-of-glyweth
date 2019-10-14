import React from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Payment = props => {


    const oldDate = props.payment.expiration_date.slice(0,7)
    const { isAuthenticated } = useSimpleAuth()

    const deletePayment = () => {
      if (isAuthenticated()) {
          fetch(`http://localhost:8000/payment/${props.payment.id}`, {
              "method": "DELETE",
              "headers": {
                  "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
              }
          })
              .then(props.getPayment)

      }
  }
    return (
        <>

          <div className={`card payment-${props.payment.id}`} style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{props.payment.merchant_name}</h5>
              <p className="card-text">Expiration Date: {oldDate}</p>
              <button onClick={deletePayment} className={`btn btn-primary payment-delete-${props.payment.id}`}>Delete</button>
            </div>
          </div>

        </>
    )
}

export default Payment
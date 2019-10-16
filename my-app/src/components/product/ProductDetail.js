import React, {useState} from "react"
import APImanager from "../../modules/APImanager"

const Product = props => {
    const[confirmation, setConfirmation] = useState("")
  // make new order for customer
//   const makeNewOrder = props => {
//     return fetch("http://localhost:8000/order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Token ${localStorage.getItem("bangazon_token")}`
//       },
//       body: JSON.stringify({
//         customer_id: `${localStorage.getItem(`customer_id`)}`
//       })
//     }).then(res => res.json())
//   }

  //I don't know where the specific fetch is going to go
  //We need to call in one product and gather all of its details somehow
  // users will be clicking links throughout the app that can direct them to this detail page
  //What's the route of each link? "/products/1" or "/products/3", etc.
  // I'll mock up the call and get back to it when the boys have sorted the user questions.

  const addProduct = id => {
    APImanager.post("order",{"product_id":id})
    .then(()=> {
        setConfirmation("Product added to cart!")
        setTimeout(() => {
            setConfirmation("")
        }, 2000);
    })
 }
  return (
    <>
      <section className="productDetail" id="{props.product.id}">
        <h3>{props.product.name}</h3>
        <h5>${props.product.price}</h5>
        <p>Description: {props.product.description}</p>
        <p>QTY REMAINING: {props.product.quantity_available}</p>
        <button onClick={() => addProduct(props.product.id)}>
          Add to Order
        </button>
        <h4 className="orderConfirmation">{confirmation}</h4>
      </section>
    </>
  )
}

export default Product

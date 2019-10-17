import React, {useState} from "react"
import APImanager from "../../modules/APImanager"

const Product = props => {
    const[confirmation, setConfirmation] = useState("")


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
        <p>QTY REMAINING: {props.product.quantity_available - props.product.quantity_sold}</p>
        <p>QTY Sold: {props.product.quantity_sold}</p>
        <button onClick={() => addProduct(props.product.id)}>
          Add to Order
        </button>
        <h4 className="orderConfirmation">{confirmation}</h4>
      </section>
    </>
  )
}

export default Product

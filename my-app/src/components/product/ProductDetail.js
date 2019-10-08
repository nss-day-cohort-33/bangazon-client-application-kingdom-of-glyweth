import React, { useState, useEffect, useRef } from "react"

const Product = props => {

    //I don't know where the specific fetch is going to go
    //We need to call in one product and gather all of its details somehow
    // users will be clicking links throughout the app that can direct them to this detail page
    //What's the route of each link? "/products/1" or "/products/3", etc.
    // I'll mock up the call and get back to it when the boys have sorted the user questions.

        return (
            <>
                <section className="productDetail" id="{props.product.id}">
                    <h1>From {props.product.product_category} :</h1>
                    <h3>{props.product.name}</h3>
                    <h5>${props.product.price}</h5>
                    <p>Description: {props.product.description}</p>
                    <p>QTY REMAINING: {props.product.quantity_available}</p>
                    <button></button>
                </section>
            </>
        )
    }
    
    
export default Product

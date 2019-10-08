import React, { useEffect, useState, useRef } from "react";

// TODO:
// - Connect form to a Post call from home page?
//Create alert for category

const SellProductForm = props => {
  const title = useRef()
  const price = useRef()
  const qty = useRef()
  const category = useRef()
  const description = useRef()

    // const getItems = () => {
    //     // Fetch the data from localhost:8000/itineraryitems
    //     fetch("http://localhost:8000/product_category", {
    //         "method": "GET",
    //         "headers": {
    //             "Accept": "application/json",
    //             // "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
    //         }
    //     })
    //         // Convert to JSON
    //         .then(response => response.json())

    //         // Store itinerary items in state variable
    //         .then((allTheItems) => {
    //             setCategoryList(allTheItems)
    //         })
    // }

  return (
    <>
    <div align = "center">
    <main style={{ textalign: "center", width: 700 }} >
      <h1>Sell A Product</h1>

      <form className="form--sellProduct">
      <fieldset>
        <label htmlFor="title"> Title </label>
          <input ref={title} type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            required autoFocus />
        <label htmlFor="Price"> Price </label>
          <input ref={price} type="text"
            name="price"
            className="form-control"
            placeholder="Price"
            required autoFocus />
        <label htmlFor="qty"> Qty </label>
          <input ref={qty} type="text"
            name="qty"
            className="form-control"
            placeholder="Qty"
            required autoFocus />
      </fieldset>

      <fieldset>
        <label>Category *</label>
        <select ref={category} className="form-control" name="category" placeholder="Category" required >
          {
          props.product_categories.map((category) => {
            return <>
              <option value={category.name} >{category.name}</option>
            </>
            })
          }
        </select>
      </fieldset>

      <fieldset>
      <label>Description</label>
      <br/>
      <br/>
        <textarea ref={description}
          name="description"
          className="form-control"
          placeholder="Tell us about this product..."
          rows="4" cols="50"
          autoFocus />
      </fieldset>

      <fieldset>
        <button type="submit">
            Sell
        </button>
      </fieldset>
      </form>
    </main>
    </div>
    </>
  );
};

export default SellProductForm;

import React, { useEffect, useState, useRef } from "react";

// TODO:
// - Connect form to a Post call from home page?
//Create alert for category
//restrict characters in description to ???

const SellProductForm = props => {
  const title = useRef()
  const price = useRef()
  const qty = useRef()
  const category = useRef()
  const description = useRef()

  const handlePostProduct = (e) => {
    e.preventDefault() 

    const newProduct = {
      "name": title.current.value,
      "price": price.current.value,
      "quantity_available": qty.current.value,
      "product_category_id": category.current.value,
      "description": description.current.value
      }
      if(newProduct.product_category_id = "nope"){
        window.confirm("Please Choose A Category!")
      }
      else{
        console.log(newProduct)
        // props.addProduct(newProduct).then(() => {
        //   props.history.push({
        //       pathname: "/"
        //   })
        // })
      }
    }

  return (
    <>
    <div align = "center">
    <main style={{ textalign: "center", width: 700 }} >
      <h1>Sell A Product</h1>

      <form className="form--sellProduct" onSubmit={handlePostProduct}>
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
          <option value={"nope"} >Please Choose Category</option>
          {
          props.product_categories.map((category) => {
            return <>
              <option value={category.id} >{category.name}</option>
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

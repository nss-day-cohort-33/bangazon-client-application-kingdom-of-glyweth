import React, { useRef } from "react";

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
      "price": parseInt(price.current.value),
      "quantity_available": qty.current.value,
      "quantity_sold": 0,
      "product_category_id": category.current.value,
      "description": description.current.value
      }
      if(newProduct.product_category_id === "nope"){
        window.alert("Please Choose A Category!")
      }
      else{
        props.addProduct(newProduct)
        .then(() => {
          props.getProducts()
        }).then(()=>
          props.history.push({
              pathname: "/"
          }))
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
            placeholder="Format: 100.00"
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
        <select ref={category} className="form-control" name="category" required >
          <option value="nope" disabled selected>Select Category</option>
          {
          props.product_categories.map((category) => {
            return <option value={category.id} >{category.name}</option>
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
          maxLength="300"
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

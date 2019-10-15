import React, {useState, useEffect} from "react";
import ProductList from "../product/ProductList"

// Made by Sydney Noh- This is the landing page for My Products. It does a fetch call for all of the products associated with the current user. It then passes those products into the productlist Component. 

const MyProducts = props => {
    const [products, setProducts] = useState([]);

    const getUserProducts = () => {
        fetch('http://localhost:8000/products?user=current', {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(setProducts)
    }

    useEffect(getUserProducts, []);

  return (
    <>
    <main style={{ textalign: "center", width: 700 }} >
      <h1>My Products</h1>

      <ProductList products={products} {...props} />

    </main>
    </>
  );
};

export default MyProducts;
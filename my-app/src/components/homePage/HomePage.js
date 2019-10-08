import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import userSimpleAuth from "../../hooks/ui/userSimpleAuth";

const HomePage = props => {
  const [products, setProducts] = useState([]);
  const { isAuthenticated } = userSimpleAuth();

  const getProducts = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/products`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then(allProducts => {
          setProducts(allProducts);
        });
      // }
    }

    useEffect(getProducts, []);

    return (
      <>
        <main>
          <ProductList products={products} {...props} />
        </main>
      </>
    );
  };
};

export default HomePage;

import React, { useEffect, useState } from "react";
import ProductList from "../product/ProductList";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const HomePage = props => {
  const [products, setProducts] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getProducts = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/products`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("bangazon_token")}`
        }
      })
        .then(response => response.json())
        .then(allProducts => {
          setProducts(allProducts);
        });
    }
  };

  useEffect(getProducts, []);

  return (
    <>
      <main>
        <ProductList products={products} {...props} />
      </main>
    </>
  );
};

export default HomePage;

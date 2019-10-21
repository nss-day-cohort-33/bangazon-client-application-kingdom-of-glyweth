import React, { useState, useEffect } from "react";
import Product from "./Product";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const ProductList = props => {
  const [products, setProducts] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const useGetLast20 = () => {
    if (isAuthenticated()) {
     fetch("http://localhost:8000/products?quantity=20", {
        method: "GET",
        headers: {
          Authorization: `Token ${localStorage.getItem("bangazon_token")}`
        }
      })
        .then(response => response.json())
        .then(product => {
          setProducts(product);
        })
    }
  };

  useEffect(useGetLast20, []);

  return (
    <>
      <article>
        {products.map(product => (
          <Product
            key={product.id}
            thismodule={props.thismodule}
            product={product}
            getUserProducts={props.getUserProducts}
          />
        ))}
      </article>
    </>
  );
};

export default ProductList;

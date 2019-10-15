import React from "react";
import ProductList from "../product/ProductList";

const HomePage = props => {

  return (
    <>
      <main>
        <ProductList products={props.products} {...props} />
      </main>
    </>
  );
};

export default HomePage;

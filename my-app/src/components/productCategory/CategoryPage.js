import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import ProdCatList from "./ProdCatList";

const CategoryPage = props => {
  console.log(props);
  const [categories, setCategories] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getCategories = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/product_category`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("bangazon_token")}`
        }
      })
        .then(response => response.json())
        .then(allCategories => {
          setCategories(allCategories);
        });
    }
  };

  useEffect(getCategories, []);

  return (
    <>
      <main>
        <CategoryList {...props} categories={categories} />
      </main>
    </>
  );
};

export default CategoryPage;

import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Form, Button, Grid } from "semantic-ui-react";

// TODO:
// - Connect form to a Post call from home page?
// - Category dropdown needs to populate from product category passed down through props? Or maybe that needs to be a call right here in products
//FIGURE OUT TOKEN
//authorization?

const SellProductForm = props => {
    // const [itineraryList, setCategoryList] = useState([])

    // const getItems = () => {
    //     // Fetch the data from localhost:8000/itineraryitems
    //     fetch("http://localhost:8000/product_category", {
    //         "method": "GET",
    //         "headers": {
    //             "Accept": "application/json",
    //             // "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
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
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 600 }}>
        <h1>Sell A Product</h1>

        <Form>

          <Form.Group widths="equal">
            <Form.Input fluid label="Title" placeholder="Title" />
            <Form.Input fluid label="Price" placeholder="Price" />
            <Form.Input fluid label="qty" placeholder="25" />
          </Form.Group>

          <Form.Group inline>
            <label>Category *</label>
            <Form.Select fluid placeholder="Category" required />
          </Form.Group>

          <Form.TextArea
            label="Description"
            placeholder="Tell us more about your product..."
          />

          <Form.Group>
            <Form.Button
              content="Choose File"
              labelPosition="left"
              icon="file"
            />
            <Form.Input />
          </Form.Group>

          <Form.Button>Submit</Form.Button>
        </Form>

      </Grid.Column>
    </Grid>
  );
};

export default SellProductForm;

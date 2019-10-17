import React, {useState, useEffect} from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import { Item } from "semantic-ui-react"

const Cart = () => {
    const [orders, setOrders] = useState([])
    const { isAuthenticated } = useSimpleAuth()
    const getOrders = () => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/order?payment_id=None`, {
                "method": "GET",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                .then(order => {
                    setOrders(order)
                })
        }
    };

    useEffect(getOrders,[])

    // const removeProductFromOrder = id => {
    //     fetch(`http://localhost:8000/order_product/${id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         Authorization: `Token ${localStorage.getItem("bangazon_token")}`
    //         }
    //     }).then(() => getOrders);
    // };

    const deleteProductFromCart = (item_id) => {
        fetch(`http://localhost:8000/order/${orders[0].id}`, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
          },
          body: JSON.stringify({
            payment_id: null,
            item_id: item_id
          })
        })
        .then(getOrders)
      }

    return (
        <>
            <h1>My Cart:</h1>
            {orders.map(item=> {
                return item.line_items.map(item => {
                    return (
                        <div>
                            <div class="card" style={{ margin: "2em", width: "22rem" }}>
                                <div class="card-body">
                                    <h2 class="card-name">
                                        <strong>{item.name}</strong>
                                    </h2>
                                    <div class="card-text">
                                        <strong>Price:</strong>{item.price}
                                    </div>
                                    <br></br>
                                    <p class="card-text">{item.description}</p>
                                    <div
                                    style={{
                                    margin: "1em .5em 0 .5em",
                                    display: "flex",
                                    justifyContent: "space-between"
                                    }}
                                    >
                                    <button
                                    class="btn btn-danger"
                                    onClick={() => deleteProductFromCart(item.id)}
                                    >
                                    Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                });
            })};
        </>
    )
}

export default Cart
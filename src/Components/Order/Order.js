import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data[0]));
  }, [id]);

  const checkOut = (order,email) =>{
    console.log(order,email);
    const orderData = {
      name: order.name,
      price: order.price,
      email:email
    }
    const url = `http://localhost:5000/addOrder`;
    fetch(url,{
      method:'POST',
      headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(orderData)
    })
    .then(res=>console.log('checkout data uploaded',res));

    // const url2 = '/deals';
    // history.push(url2);
  };

  return (
    <div>
      <h3 className="container mt-5">Order List</h3>
      <Table striped bordered hover className="container mt-2">
        <thead>
          <tr>
            <th>BookName</th>
            <th>Price</th>
            <th>Checkout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td name="name">{order.name}</td>
            <td name="price">{order.price}</td>
            <td>
              <Button className="btn-success" onClick={()=>checkOut(order,loggedInUser.email)}>Checkout</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Order;

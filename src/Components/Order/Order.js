import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";


//Order details are showed in Deals page.

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    fetch(`https://dry-stream-47875.herokuapp.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data[0]));
  }, [id]);

  const checkOut = (order,email) =>{
    console.log(order,email);
    const orderData = {
      name: order.name,
      price: order.price,
      email:email,
      date: new Date().toDateString("dd/MM/yyyy")
    }
    const url = `https://dry-stream-47875.herokuapp.com/addOrder`;
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

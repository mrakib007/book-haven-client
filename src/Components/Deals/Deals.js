import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://dry-stream-47875.herokuapp.com/deals?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  return (
    <div>
      <div className="container my-5">
        <h3>You have {deals.length} purchases.</h3>
        {/* {
                deals.map(deal=> <li><strong>Book Name:</strong> {deal.name},Price: {deal.price},Date: {deal.date}.</li>)
            } */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>BookName</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr>
                <td>{deal.name}</td>
                <td>{deal.price}</td>
                <td>
                  {deal.date}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Deals;

import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageBook = () => {
  const [books, manageBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => manageBooks(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted");
      });
  };

  return (
    <div className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>BookName</th>
            <th>Price</th>
            <th>DeleteBook</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>
                <Button className="btn-danger" onClick={() => handleDelete(book._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBook;

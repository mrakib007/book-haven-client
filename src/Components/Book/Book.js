import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Book = ({ book }) => {
  const history = useHistory();
  const bookDetail = (id) =>{
    const url = `/book/${id}`;
    history.push(url);
    console.log(id);
  }
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.imageUrl} />
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Button variant="primary" onClick={()=>bookDetail(book._id)}>Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book;

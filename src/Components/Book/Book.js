import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Book = ({ book }) => {
  const deleteEvent = (id) => {};
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.imageUrl} />
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book;

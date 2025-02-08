import React from "react";
import Card from "react-bootstrap/Card";
import MyModal from "./MyModal";

export default function Product({ product }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div style={{ height: "18rem" }}>
          <img
            className="object-fit-cover object-position-center w-100 h-100"
            src={product.src}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.summary}</Card.Text>
          <MyModal product={product} />
        </Card.Body>
      </Card>
    </>
  );
}

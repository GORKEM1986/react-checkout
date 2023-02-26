import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsCartPlus } from "react-icons/bs";

const AddProduct = ({ postItem, show }) => {
  const [newProduct, setnewProduct] = useState({
    name: "",
    image: "",
    price: "",
    dampingRate: "0.8",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem(newProduct);
    setnewProduct({
      name: "",
      image: "",
      price: "",
      dampingRate: "0.8",
      amount: "",
    });
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit} className={show ? "me-1" : "mx-auto"}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          onChange={(e) =>
            setnewProduct({ ...newProduct, name: e.target.value })
          }
          type="text"
          value={newProduct.name}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          onChange={(e) =>
            setnewProduct({ ...newProduct, price: e.target.value })
          }
          type="number"
          value={newProduct.price}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control
          onChange={(e) =>
            setnewProduct({ ...newProduct, amount: e.target.value })
          }
          type="number"
          value={newProduct.amount}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control
            onChange={(e) =>
              setnewProduct({ ...newProduct, image: e.target.value })
            }
            id="basic-url"
            aria-describedby="basic-addon3"
            value={newProduct.image}
            required
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className="d-flex justify-content-center mb-3">
        <Button variant="success" type="submit" className="m-0">
          <BsCartPlus className="me-1" style={{ fontSize: "1.5rem" }} />
          Add To Card
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddProduct;

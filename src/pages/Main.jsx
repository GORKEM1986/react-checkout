import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import { Container } from "react-bootstrap";

const Main = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const baseUrl = "https://63f9fb41897af748dcc6ee8d.mockapi.io/products";

  const getData = async () => {
    const { data } = await axios.get(baseUrl);
    setData(data);
  };

  const handleMınus = async (id) => {
    const { data } = await axios.get(baseUrl + "/" + id);
    await axios.put(baseUrl + "/" + id, {
      amount: data.amount - 1,
    });
    getData();
  };

  const handlePlus = async (id) => {
    const { data } = await axios.get(baseUrl + "/" + id);
    await axios.put(baseUrl + "/" + id, {
      amount: Number(data.amount) + 1,
    });
    getData();
  };

  const deleteItem = async (id) => {
    await axios.delete(baseUrl + "/" + id);
    getData();
  };

  const postItem = async (newItem) => {
    await axios.post(baseUrl, newItem);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header show={show} setShow={setShow} />
      <Container className={show ? "d-flex " : ""}>
        {show && <AddProduct show={show} postItem={postItem} />}
        {data ? (
          <CardTotal
            deleteItem={deleteItem}
            handlePlus={handlePlus}
            handleMınus={handleMınus}
            data={data}
            show={show}
          />
        ) : (
          "No products data..."
        )}
      </Container>
    </div>
  );
};

export default Main;

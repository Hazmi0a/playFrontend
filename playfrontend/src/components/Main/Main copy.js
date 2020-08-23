import React, { useState, useEffect } from "react";
import axios from "axios";
import CardBox from "../Cardbox/Cardbox";
import Header from "../Header/Header";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col,
  CardDeck,
} from "react-bootstrap";

import "./Main.css";
import "holderjs";
const Main = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [secretKey, setsecretKey] = useState("undefined");
  const ENDPOINT = "http://localhost:5000";
  const SECRET_KEY = "http://localhost:5000/key";

  useEffect(() => {
    const { name, room } = "";

    setRoom(room);
    setName(name);
  });

  const sendMessage = (event) => {};

  const kekObj = {
    title: "KEK",
    body: "this is the key encryption key fuction generator",
    action_text: "Generate KEK",
    action_url: "http://127.0.0.1:5000/kek/",
  };

  const tekObj = {
    title: "TEK",
    body: "this is the Traffic encryption key fuction generator",
    action_text: "Generate TEK",
    action_url: "",
  };

  const cikObj = {
    title: "CIK",
    body: "this funtion is used to read the content of CIK",
    action_text: "Read CIK",
    action_url: "",
  };

  const fillObj = {
    title: "Fillkey",
    body: "this funtion is used to read the content of FillKey",
    action_text: "Read FILL",
    action_url: "",
  };

  return (
    <>
      <Header />

      <div className="center">
        <Row>
          <Col>
            <CardBox cardInfo={kekObj} type="1" />
          </Col>
          <Col>
            <CardBox cardInfo={tekObj} />
          </Col>
          <Col>
            <CardBox cardInfo={fillObj} />
          </Col>
          <Col>
            <CardBox cardInfo={cikObj} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Main;

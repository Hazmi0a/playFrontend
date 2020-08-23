import React, { useState, useEffect } from "react";
import axios from "axios";

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
  InputGroup,
  Spinner,
} from "react-bootstrap";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "", isLoading: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  handleSubmit(event) {
    const youtubeURL = this.state.url;
    const pos = youtubeURL.search("\\?");
    if (pos !== -1) {
      this.setState({ isLoading: true });
      console.log(this.state.isLoading);
      const len = youtubeURL.length;
      const playURL = youtubeURL.slice(pos, len);
      console.log(playURL); //TODO: submit to server
      const timer = setTimeout(() => {}, 1000);
      this.setState({ isLoading: false });
    }
    event.preventDefault();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1>Welcome to </h1>
          <h1>the Painc Room </h1>
        </div>

        <div className="center">
          <InputGroup size="lg">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">
                Youtube
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              disabled={isLoading}
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="URL"
              onChange={(e) => this.setState({ url: e.target.value })}
            />
            <InputGroup.Append>
              <Button
                variant="info"
                disabled={isLoading}
                onClick={!isLoading ? this.handleSubmit : null}
              >
                {isLoading ? <Spinner animation="border" size="sm" /> : "Play"}
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default Main;

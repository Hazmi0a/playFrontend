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
    this.state = { url: "", isLoading: false, validated: false, errors: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  handleSubmit(event) {
    event.preventDefault();

    //VALIDATE
    var errors = [];
    //URL
    const youtubeURL = this.state.url.toLowerCase;
    const pos = youtubeURL.search("\\?");
    const youtubePos = youtubeURL.search("youtube");
    this.setState({ isLoading: true });
    if (pos == -1 && youtubePos == -1) {
      errors.push("url");
    }

    this.setState({
      errors: errors,
    });

    if (errors.length > 0) {
      return false;
    } else {
      this.setState({ isLoading: true });
      console.log(this.state.isLoading);
      const len = youtubeURL.length;
      const playURL = youtubeURL.slice(pos, len);
      console.log(playURL); //TODO: submit to server
    }
  }

  render() {
    const { isLoading, validated } = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1>Welcome to </h1>
          <h1>the Painc Room </h1>
        </div>

        <div className="center">
          <Form
            validated={validated}
            onSubmit={!isLoading ? this.handleSubmit : null}
          >
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
                controlId="validationURL"
                onChange={(e) => this.setState({ url: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid youtube URL.
              </Form.Control.Feedback>
              <InputGroup.Append>
                <Button
                  variant="info"
                  type="submit"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handleSubmit : null}
                >
                  {isLoading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Play"
                  )}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Main;

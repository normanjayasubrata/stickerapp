import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Container style={{ paddingTop: "2rem" }}>
          <Jumbotron>
            <h1>Norman's Logo Store!</h1>
            <p>
              This is a simple Web Application, a simple CRUD Client Side
              Project for calling CRUD Rest API Serer.
            </p>
            <Row className="justify-content-between">
              <Col>
                <Link to="/logo">
                  <Button variant="primary">See logos</Button>
                </Link>
              </Col>
              <Col>
                <a href="https://github.com/normanjayasubrata/stickerapp" rel="noopener noreferrer" target="_blank">
                  <Button style={{ marginRight: "1rem" }} variant="primary">
                    Frontend Github
                  </Button>
                </a>
                <a href="https://github.com/normanjayasubrata/stickersapi" rel="noopener noreferrer" target="_blank">
                  <Button variant="primary">Backend Github</Button>
                </a>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default LandingPage;

import React, { Component } from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Container style={{paddingTop: "2rem"}}>
          <Jumbotron>
            <h1>Norman's Logo Store!</h1>
            <p>
            This is a simple Web Application, a simple CRUD Client Side Project for calling
            CRUD Rest API Serer.
            </p>
            <p>
                <Link to="/logo">
                <Button variant="primary">See logos</Button>
                </Link>
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default LandingPage;

import React, { Component } from "react";
import { Navbar, Nav, Container, Col, Button , Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { normanLogo } from "../assets/images";
import { removeToken } from "../utils/token";

class NavBar extends Component {
  render() {
      const loginBtn = (
       <Row>
       <Link to="/register"><Button>register</Button></Link>
       <Link to="/login"><Button style={{marginLeft: "1rem"}}>Login</Button></Link>
       </Row>
      )

      const logoutBtn = (
          <div>
            <Row>
            <Col className="align-self-center"><h1 style={{fontSize: "1rem"}}>{this.props.account.username}</h1></Col>
            <Nav.Link href="/">
            <Button onClick={() => {
                removeToken();
            }}>Logout</Button>
            </Nav.Link>
              
            </Row>
          </div>
      )
    return (
      <div>
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">
            <img
              src={normanLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Col>
                <Nav className="justify-content-end">
                  <Nav.Item style={{marginRight: "2rem"}}>
                    <Link to="/logo/create">Create Logo</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/logo">List Logo</Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <Nav className="justify-content-end">
                  <Nav.Item>
                    {
                        this.props.isLogin
                        ? logoutBtn
                        : loginBtn
                    }
                  </Nav.Item>
                </Nav>
              </Col>
          </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.accountReducer
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

import React, { Component } from "react";
import { Form, Button, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {AccountLogin} from '../api/account'
import { setToken } from "../utils/token";


export class LoginPage extends Component {
    state = {
        form: {
            email: "",
            password: ""
        },
        hidePassword: true
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState((state) => {
            return {
                form: {
                    ...state.form,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.handleEmpty()) {
            AccountLogin(this.state.form).then(res => {
                setToken(res.data.token);
                this.props.history.push("/")
                window.location.reload();
            })
            .catch(error => error.response.data.message ? alert(error.response.data.message) : alert("Connection Error"))
        } else {
            alert("complete form")
        }

    }

    handleEmpty = () => {
        const hasEmail = this.state.form.email.trim() !== "";
        const hasPassword = this.state.form.password.trim() !== "";
        return hasEmail && hasPassword
    }

    handleHidden = () => {
        this.setState({hidePassword: !this.state.hidePassword})
    }

  render() {
    return (
      <div>
        <Container style={{paddingTop: "4rem"}}>
         <Row className="justify-content-center">
         <Form style={{border: "solid black 2px", borderRadius: "20px", padding: "4rem", width: "40rem"}} onSubmit={this.handleSubmit} >
         <Form.Group>
           <Form.Label>Email address</Form.Label>
           <Form.Control onChange={this.handleChange} name="email" type="email" />
         </Form.Group>

         <Form.Group>
           <Form.Label>Password</Form.Label>
           <InputGroup>
           <FormControl onChange={this.handleChange} name="password" type={this.state.hidePassword ? "password" : "text"} />
           <InputGroup.Append>
             <Button onClick={this.handleHidden} variant="outline-secondary" style={{paddingTop: "0rem", paddingBottom: "0rem"}}>
             {
                 this.state.hidePassword
                 ? <FaEye size="2em" />
                 : <FaEyeSlash size="2em" />
             }
             </Button>
           </InputGroup.Append>
         </InputGroup>
         </Form.Group>

       
         <br />
         <Button variant="primary" type="submit" size="lg" style={{width: "100%"}}>
           Submit
         </Button>
       </Form>
         </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;

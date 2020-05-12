import React, { Component } from 'react'
import { Form, Button, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {AccountRegister} from '../api/account'

export class RegisterPage extends Component {

    state = {
        form: {
            username: "",
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
            console.log(this.state.form)
            AccountRegister(this.state.form).then(res => {
                this.props.history.push("/login")
                // window.location.reload();
            })
            .catch(() => alert("Email Already Exist"))
        } else {
            alert("complete form")
        }

    }

    handleEmpty = () => {
        const hasUsername = this.state.form.username.trim() !== "";
        const hasEmail = this.state.form.email.trim() !== "";
        const hasPassword = this.state.form.password.trim() !== "";
        return hasUsername && hasEmail && hasPassword
    }

    handleHidden = () => {
        this.setState({hidePassword: !this.state.hidePassword})
    }

    render() {
        return (
            <div>
            <Container style={{paddingTop: "4rem"}}>
            <Row className="justify-content-center">
            <h1>Register Form</h1>
            </Row>
             <Row className="justify-content-center">
             <Form style={{border: "solid black 2px", borderRadius: "20px", padding: "4rem", width: "40rem"}} onSubmit={this.handleSubmit} >

             <Form.Group>
             <Form.Label>Username</Form.Label>
             <Form.Control onChange={this.handleChange} name="username" type="text" />
           </Form.Group>

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
        )
    }
}

export default RegisterPage

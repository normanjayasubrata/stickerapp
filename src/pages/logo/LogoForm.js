import React, { Component } from 'react'
import { Container, Row, Form, Button } from "react-bootstrap";

class LogoForm extends Component {

    state = {
        form: {
            title: "",
            description: "",
            rating: 0,
            url: ""
        }
    }

    componentDidMount() {
        if (this.props.logos) {
            this.setState((state, props) => {
                return {
                    form: {
                        ...state.form,
                        ...props.logos
                    }
                }
            })
        }
        
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
            this.props.submit(this.state.form)
        } else {
            alert("complete form")
        }

    }

    handleEmpty = () => {
        const hastitle = this.state.form.title.trim() !== "";
        const hasdescription = this.state.form.description.trim() !== "";
        const hasrating = !isNaN(this.state.form.rating) && this.state.form.rating !== 0;
        const hasUrl = this.state.form.url.trim() !== "";
        return hastitle && hasdescription && hasUrl && hasrating
    }

    render() {
        return (
            <div>
            <Container style={{paddingTop: "4rem"}}>
             <Row className="justify-content-center">
             <Form style={{border: "solid black 2px", borderRadius: "20px", padding: "4rem", width: "40rem"}} onSubmit={this.handleSubmit} >
    
             <Form.Group>
               <Form.Label>Title</Form.Label>
               <Form.Control onChange={this.handleChange} value={this.state.form.title} name="title" type="text" />
             </Form.Group>
    
    
             <Form.Group>
               <Form.Label>Description</Form.Label>
               <Form.Control onChange={this.handleChange} value={this.state.form.description} name="description" type="text" />
             </Form.Group>
    
    
             <Form.Group>
             <Form.Label>Rating</Form.Label>
             <Form.Control onChange={this.handleChange} value={this.state.form.rating} as="select" name="rating" >
             
               
                {this.state.form.rating === 0 ? <option>Choose Your Rating</option> : null}
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
               <option>8</option>
               <option>9</option>
               <option>10</option>
             </Form.Control>
           </Form.Group>
    
    
             <Form.Group>
               <Form.Label>URL</Form.Label>
               <Form.Control onChange={this.handleChange} value={this.state.form.url} name="url" type="text" placeholder="http://example.com/assets/img/example.png" />
             </Form.Group>
           
             <br />
             <Button variant="primary" type="submit" size="lg" style={{width: "100%"}}>
               Save
             </Button>
           </Form>
             </Row>
            </Container>
          </div>
        )
    }
}

export default LogoForm

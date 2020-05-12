import React, { Component } from 'react'
import { Card, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetLogos } from "../../api/logo";


export class LogosPage extends Component {
    state = {
        logos: [],
        isLoading: true
    }

    componentDidMount() {
        GetLogos().then(res => {
            this.setState({logos: res.data})
        })

        setTimeout(() => {
            this.setState({isLoading: false})
        }, 500);
    }
    
    render() {
        const {logos, isLoading} = this.state
        return (
            <div>
               <Container style={{textAlign: "center", paddingTop: "3rem"}}>
                <Row className="justify-content-center">
                {
                    isLoading
                    ? <h2>...Loading</h2> :
                     logos.map(logo => {
                        return (
                          <Card key={logo.id} style={{ width: '18rem', margin: "1rem" }}>
                          <Card.Header>{logo.title}</Card.Header>
                            <Card.Img variant="top" src={logo.url} />
                            <Card.Body>
                                <Card.Title>{logo.description}</Card.Title>
                                <Card.Text>{logo.rating}</Card.Text>
                                <Link to={`/logo/${logo.id}`}>
                                <Button variant="primary" size="lg" style={{width: "100%"}}>Edit</Button>
                                </Link>
                            </Card.Body>
                            </Card>
                        )
                    })
                }
                </Row>
               </Container>
            </div>
        )
    }
}

export default LogosPage

/* 
 
*/
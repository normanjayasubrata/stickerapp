import React, { Component } from 'react'
import { Container, Row, Button } from "react-bootstrap";
import { UpdateLogo, GetLogo, DeleteLogo } from "../../api/logo";
import LogoForm from './LogoForm'


export class LogoUpdate extends Component {
    state = {
        form: {
            title: "",
            description: "",
            rating: 0,
            url: ""
        },
        isLoading: true


    }

    componentDidMount() {
        GetLogo(this.props.match.params.id).then(res => {
            this.setState(state => {
                return {
                    ...state,
                    form: res.data
                }
            })
        })
        .then(() => {
            this.setState({isLoading: false})

        })
        .catch(error => alert(error))

    }
    

    submitLogo = (logo) => {
        UpdateLogo(this.props.match.params.id,logo)
        .then(res => {
            this.setState(state => {
                return {
                    ...state,
                    form: res.data
                }
            })
        })
        .catch(error => alert(error))
    }

    deleteLogo = () => {
        DeleteLogo(this.props.match.params.id)
        .then(() => {
                this.props.history.push("/logo")
        })
        .catch(error => alert(error))
    }

    render() {
        const {isLoading} = this.state
        return (
            <div>
              <Container>
              <Row className="justify-content-center" style={{paddingTop: "1rem", marginBottom: "-3rem"}}><h2>{this.state.form.title}</h2> </Row>
              {
                isLoading
                ? <Row className="justify-content-center" style={{paddingTop: "5rem"}}><h2>...Loading</h2> </Row>
                : <LogoForm submit={this.submitLogo} logos={this.state.form} />
                }
              <Row className="justify-content-center" style={{paddingTop: "2rem"}}>
                <Button onClick={this.deleteLogo} variant="danger" size="lg">DELETE</Button>
              </Row>

              </Container>
            </div>
        )
    }
}

export default LogoUpdate

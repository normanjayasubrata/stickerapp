import React, { Component } from 'react'
import { PostLogo } from "../../api/logo";
import LogoForm from './LogoForm'

class CreateLogo extends Component {
    submitLogo = (logo) => {
        PostLogo(logo)
        .then(res => {
            setTimeout(() => {
                this.props.history.push(`/logo/${res.data.id}`)
            }, 500);
        })
        
    }
    render() {
        return (
            <div>
                <LogoForm submit={this.submitLogo} />
            </div>
        )
    }
}

export default CreateLogo

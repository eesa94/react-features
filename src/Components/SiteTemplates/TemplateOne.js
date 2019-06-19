import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Lexus from './Lexus';


export class TemplateOne extends Component {

    render() {
        
        const container = {
            height: '100vh',
            padding: 0,
        }
        
        return (
            <Container fluid style={container} >
                <Lexus />
            </Container>
        )
    }
}

export default TemplateOne

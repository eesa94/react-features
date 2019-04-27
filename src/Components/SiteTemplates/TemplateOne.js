import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import benjaminvoros_edit from '../../Images/benjaminvoros_edit.jpg'
import ethandow from '../../Images/ethandow.jpg'
import jessicalewis from '../../Images/jessicalewis.jpg'


export class TemplateOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: [
                1,
                2,
                3
            ],
            images: [
                jessicalewis,
                ethandow,
                benjaminvoros_edit,
            ],
            activeSection: 1
        }
        this.mouseEnterOne = this.mouseEnterOne.bind(this)
    }


    mouseEnterOne = () => {
        this.setState({
            activeSection: 1
        })
    }

    render() {
        
        const container = {
            height: '100vh',
            padding: 0,
        }

        const bgImageContainer = {
            height: '100%',
            width: '100%',
            backgroundImage: `url(${jessicalewis})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        

        return (
            <Container fluid style={container} >
                <div className="bgImage" style={bgImageContainer}>
                    <Row className="no-gutters">
                        <Col xs={{size: 6, offset: 2}}>
                            <p className="changa8" onMouseEnter={this.mouseEnterOne}>Line One</p>
                            <p className="changa8">Line Two</p>
                            <p className="changa8">Line Three</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default TemplateOne

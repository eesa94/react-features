import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import benjaminvoros_edit from '../../Images/benjaminvoros_edit.jpg'
import ethandow from '../../Images/ethandow.jpg'
import jessicalewis from '../../Images/jessicalewis.jpg'


export class Lexus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: [
                {text: 'Section one', image: `url(${jessicalewis})`},
                {text: 'Section two', image: `url(${ethandow})`},
                {text: 'Section three', image: `url(${benjaminvoros_edit})`},
            ],
            activeSection: 1
        }
        this.mouseEnter = this.mouseEnter.bind(this)
    }


    mouseEnter = (index) => {
        this.setState({
            activeSection: index
        });
    }

    render() {
        
        const bgImageContainer = {
            height: '100%',
            width: '100%',
            backgroundImage: `url(${jessicalewis})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }


        return (
            <div className="bgImage" style={bgImageContainer}>
                <Row className="no-gutters">
                    <Col xs={{size: 6, offset: 2}}>
                        {
                            this.state.sections.map((section, index) => 
                                <p className="changa8" onMouseEnter={this.mouseEnter} key={index} index={index}>{section.text}</p>
                            )
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Lexus

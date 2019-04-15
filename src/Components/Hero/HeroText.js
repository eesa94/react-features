import React, { Component } from 'react'

export class HeroText extends Component {
    render() {
        return (
            <div className="heroText">
                <h1 className="heroHeader changa8 white">
                    {this.props.heroHeader}
                </h1>
                <h3 className="heroSubheader changa6 white">
                    {this.props.heroSubHeader}
                </h3>
            </div>
        )
    }
}

export default HeroText

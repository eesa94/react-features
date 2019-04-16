import React, { Component } from 'react';
import './Features.css';


class FeaturesMaster extends Component {
    render() {
        return (
            <div className="row no-gutters mb3">
                <div className="col-lg-4 offset-lg-4 text-center">
                <h1 className="sectionHeader featureHeader changa6 white">
                    {this.props.featureName}
                </h1>
                </div>
            </div>
        )
    }
}

export default FeaturesMaster

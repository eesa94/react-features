import React, { Component } from 'react';
import './Features.css';
import HomeLink from '../HomeLink';


class FeaturesMaster extends Component {
    render() {
        return (
            <div className="row no-gutters mb3">
                <div className="col-lg-4 offset-lg-4 text-center">
                <h1 className="sectionHeader featureHeader changa6 white">
                    {this.props.featureName}
                </h1>
                    <HomeLink />
                </div>
            </div>
        )
    }
}

export default FeaturesMaster

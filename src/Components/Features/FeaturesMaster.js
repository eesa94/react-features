import React, { Component } from 'react';
import './Features.css';
import { Link } from 'react-router-dom';


class FeaturesMaster extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col-lg-4 offset-lg-4 text-center">
                <h1 className="sectionHeader featureHeader changa6 white">
                    {this.props.featureName}
                </h1>
                    <Link to='/' className="changa-2 white">
                        Home
                    </Link>
                </div>
            </div>
        )
    }
}

export default FeaturesMaster

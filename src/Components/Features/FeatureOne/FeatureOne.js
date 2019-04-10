import React from 'react';
import '../Features.css';
import SideNav from './SideNav/SideNav';
import { Link } from 'react-router-dom';


const FeatureOne = () => {
  return (
    <div className="container-fluid featureOneContainer">
      <Link to='/' className="changa-2 white">
        Home
      </Link>
      <SideNav />
      <div className="row no-gutters">
        <div className="col-lg-4 offset-lg-4 text-center">
          <h1 className="sectionHeader featureHeader changa6 white">
            Sidenav
          </h1>
          

        </div>
      </div>
    </div>
  )
}

export default FeatureOne

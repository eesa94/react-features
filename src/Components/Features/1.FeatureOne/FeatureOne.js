import React from 'react';
import '../Features.css';
import SideNav from './SideNav';
import FeatureMenu from '../FeatureMenu';


const FeatureOne = () => {

  const stepOne = "I am step one";
  const stepTwo = "buvwbvrvbw";
  const stepThree = "nvwirvnr";
  const stepFour = "vwninro";

  const stepsArray = [
    ("1. " + stepOne), 
    ("2. " + stepTwo), 
    ("3. " + stepThree), 
    ("4. " + stepFour)
  ]

  return (
    <div className="container-fluid featureContainer">
      <FeatureMenu 
        name={"Side Nav"}
        source={"https://github.com/eesa94/react-features/tree/master/src/Components/Features/1.FeatureOne"}
        steps={stepsArray}
        />
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            <SideNav />
          </div>
        </div>
    </div>
  )
}

export default FeatureOne

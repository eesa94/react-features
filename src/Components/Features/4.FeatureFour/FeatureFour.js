import React from 'react';
import '../Features.css';
import { Link } from 'react-router-dom';
import Hero from '../../Hero/Hero';
import benjaminvoros_edit from '../../../Images/benjaminvoros_edit.jpg';
import ethandow from '../../../Images/ethandow.jpg';
import jessicalewis from '../../../Images/jessicalewis.jpg';


const FeatureFour = () => {
  return (
    <div className="container-fluid" style={{ padding: 0 }} >
      <Link 
        to='/' 
        className="changa-2 white position-fixed"
        style={{ top: '3%', left: '2%', zIndex: '200'}}>
        Home
      </Link>

      <Hero 
        image={benjaminvoros_edit} 
        strength={200}
        overlayHeight={{height: "100vh"}}
        heroHeader={"Parallax Hero 1"} 
        heroSubHeader={"Parallax with low strength (200)"} />
      <Hero 
        image={ethandow} 
        strength={500}
        overlayHeight={{height: "100vh"}}
        heroHeader={"Parallax Hero 2"} 
        heroSubHeader={"Parallax with medium strength (500)"} />
      <Hero 
        image={jessicalewis} 
        strength={500}
        overlayHeight={{height: "100vh"}}
        heroHeader={"Parallax Hero 3"} 
        heroSubHeader={"Parallax with high strength (800)"} />
    </div>
  )
}

export default FeatureFour

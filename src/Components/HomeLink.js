import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './HomeLink.css';

const HomeLink = () => {
    return (
        <Link to='/'>
            <Button className="topBarLink homeLink changa2">home</Button>
        </Link>
    )
}

export default HomeLink

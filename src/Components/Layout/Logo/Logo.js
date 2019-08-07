import React from 'react';

import classes from './Logo.css';
import logo from '../../../assets/logo/logo.svg'

const reactLogo = () => {
    return (
        <img title="Created with React" className={classes.ReactLogo} src={logo} alt="logo"/>
     );
}
 
export default reactLogo;

import React from 'react';

import classes from './Logo.css';
import logo from '../../../assets/logo/logo.svg'

const reactLogo = () => {
    return (
        <img title="Page created using React.js" className={classes.ReactLogo} src={logo} alt="logo"/>
     );
}
 
export default reactLogo;

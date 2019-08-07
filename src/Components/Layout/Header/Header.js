import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Title from './Title/Title';
import image from '../../../assets/images/wmacleod.png'

import classes from './Header.css';


const header = () => {

    return ( 
        <Aux>
        <img className={classes.Picture} src={image} alt="Wilson MacLeod" />
        <Title />
        </Aux>
    );
}
 
export default header;
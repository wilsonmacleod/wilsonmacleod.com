import React from 'react';
import Typist from 'react-typist';

import Aux from '../../hoc/Auxiliary';
import image from '../../assets/images/wmacleod.webp';

import classes from './Header.css';


const header = () => {
    let  cursorProps = {
        show: true,
        blink: true,
        element: <span className={classes.Cursor}>|</span>,
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
      };
    return ( 
        <Aux>
        <img className={classes.Picture} src={image} alt="Wilson MacLeod" />
        <h1 
        className={classes.Title}>
            Wilson MacLeod
        </h1>
        <div className={classes.ConsoleLog}>
        <Typist
            cursor={cursorProps}
        >
            <span id="cons">console</span>
            <span id="log">.log</span>
            <span id="par">(</span>
            <span id="str">'Welcome to my website!'</span>
            <span id="par">)</span>
            <span id="col" >;</span>
            <Typist.Backspace count={38} delay={250} />
            <span id="cmt"># Welcome to my website!</span>
            </Typist>
        </div>
        </Aux>
    );
}
 
export default header;
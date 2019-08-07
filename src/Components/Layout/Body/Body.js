import React from 'react';

import classes from './Body.css';

import ScBody  from './StarChart/ScBody';

const body = () => {
    
    return (
        <div className={classes.MainContent}>
        <p>I am an aspiring software developer.</p>
        <p>I was born in Vancouver, Canada and raised in Kailua, Hawai'i.</p> 
        <p>I graduated from the University of Hawai'i in 2018.</p> 
        <p>My degree is in 
        Geography-Geographic Information Systems.</p>
        <p>I enjoy creating things, finding efficiencies and
            solving complex processes or problems with other people.</p>
        <p>My <ins className={classes.Underline}>main</ins> proficiencies are in:</p>
        <ScBody />
        <p>Here is my <a href="/" className={classes.Link}>Resume</a>.</p>
        <p>Here is some of my <a href="https://github.com/wilsonmacleod" className={classes.Link}>code</a>.</p>
        <p>Here is my <a href="https://www.linkedin.com/in/wilson-macleod-97b50b179/" className={classes.Link}>LinkedIn</a>.</p>
        <p>When I'm not learning or working,
        I enjoy playing basketball, planning international trips, 
        and playing with my dog,
        <a href="/" className={classes.LinkDaisy}>Daisy</a>.</p>
        <p>Drop me a line at <a href="mailto: wilsonmacleod@gmail.com" className={classes.Link}>wilsonmacleod@gmail.com</a>.</p>
        </div>
    );
}
 
export default body;
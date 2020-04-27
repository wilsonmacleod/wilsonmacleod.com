import React from 'react';

import resume from '../../assets/resume/wmacleod-resume.pdf';
import classes from './Body.css';

const body = (props) => {
    
    return (
        <div className={classes.MainContent}>
        <p>I am an aspiring software developer.</p>
        <p>I was born in Vancouver, Canada and raised in Kailua, Hawai'i.</p> 
        <p>I graduated from the University of Hawai'i in 2018.</p> 
        <p>My degree is in 
        Geography-Geographic Information Systems.</p>
        <p>When I'm not learning or working,
        I enjoy playing basketball, travelling, 
        and playing with my dog,
        <ins className={classes.LinkDaisy}> Daisy</ins>.</p>
        <p>I enjoy creating things, finding efficiencies and
            solving complex processes or problems with other people.</p>
        <p>Here is my <a href={resume} className={classes.Link} target="_blank" rel="noopener noreferrer">Resume</a>.</p>
        <p>Here is my <a href="https://github.com/wilsonmacleod" className={classes.Link} target="_blank" rel="noopener noreferrer">Github</a>.</p>
        <p>Here is my <a href="https://www.linkedin.com/in/wilson-macleod-97b50b179/" className={classes.Link} target="_blank" rel="noopener noreferrer" >LinkedIn</a>.</p>
        <p>You can contact me at <a href="mailto: wilsonmacleod@gmail.com" className={classes.Link}>wilsonmacleod@gmail.com</a>.</p>
        <p>Check out some of my projects:</p>
        {props.children}
        </div>
    );
}
 
export default body;
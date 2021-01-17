import React from 'react';

import resume from '../../../assets/resume/wmacleod-resume.pdf';
import classes from './AboutMe.css';

const aboutMe = (props) => {
    let ele = []
    props.skills.forEach(e => {
            return ele.push(<span
                                className={classes.Skill}
                                key={e}
                                >{e}</span>)
    });    
    return (
        <div className={classes.MainContent}>
        <p>I am an aspiring software developer.</p>
        <p>I was born in Vancouver, Canada and raised in Kailua, Hawai'i.</p> 
        <p>I graduated from the University of Hawai'i in 2018.</p> 
        <p>My degree is in 
        Geography-Geographic Information Systems.</p>
        <p>When I'm not learning or working,
        I enjoy playing basketball, travelling, 
        and playing with my dog, Daisy.</p>
        <p>I enjoy creating things, finding efficiencies and
            solving complex processes as part of a team or solo.</p>
        <p>Here are some things I  know: </p>
        <p   className={classes.SkillContainer}> {ele}</p>
        <p>Here is my <a href={resume} className={classes.Link} target="_blank" rel="noopener noreferrer">Resume</a>.</p>
        <p>Here is my <a href="https://github.com/wilsonmacleod" className={classes.Link} target="_blank" rel="noopener noreferrer">Github</a>.</p>
        <p>Here is my <a href="https://www.linkedin.com/in/wilson-macleod-97b50b179/" className={classes.Link} target="_blank" rel="noopener noreferrer" >LinkedIn</a>.</p>
        <p>You can learn more about me, my skills and interests by navigating the above menu.</p>
        <p>You can also contact me at <a href="mailto: wilsonmacleod@gmail.com" className={classes.Link}>wilsonmacleod@gmail.com</a>.</p>
        </div>
    );
};
 
export default aboutMe;
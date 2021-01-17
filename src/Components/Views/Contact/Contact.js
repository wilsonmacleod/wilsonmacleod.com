import React from 'react';

import classes from '../AboutMe/AboutMe.css';

const contact = () => {
    return ( 
        <div className={classes.MainContent}>
        <p>Feel free to contact me via:</p>
        <p>
        <a href="https://www.linkedin.com/in/wilson-macleod-97b50b179/" className={classes.Link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p>or</p>
        <p>Email:  <a href="mailto: wilsonmacleod@gmail.com" className={classes.Link}>wilsonmacleod@gmail.com</a>.</p>
        </div>
     );
}
 
export default contact;
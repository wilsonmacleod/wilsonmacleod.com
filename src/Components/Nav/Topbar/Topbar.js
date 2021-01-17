import React from 'react';

import classes from './Topbar.css';

const topbar = (props) => {
    let css = props.isHidden ? classes.Static : classes.Toolbar;
    return (         
        <header className={css} >
            <nav>
                <ul>
                    <li>
                        <a 
                        href="https://github.com/wilsonmacleod" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.GithubIcon}> </a>
                        <a 
                        href="https://www.linkedin.com/in/wilson-macleod-97b50b179/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.LinkedInIcon}> </a>
                    
                    </li>
                </ul>
            </nav>
        </header> 
    );
}
 
export default topbar;
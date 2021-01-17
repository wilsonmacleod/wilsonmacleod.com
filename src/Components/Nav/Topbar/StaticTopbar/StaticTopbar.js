import React from 'react';

import classes from '../Topbar/Topbar.css';

const staticTopbar = () => {
    return (         
        <header className={classes.Static} >
            <nav>
                <ul>
                    <div>
                        <a 
                        href="https://github.com/wilsonmacleod" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.GithubIcon}
                        />
                        <a 
                        href="https://github.com/wilsonmacleod" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.LinkedInIcon}
                        />
                    
                    </div>
                </ul>
            </nav>
        </header> 
    );
}
 
export default staticTopbar;
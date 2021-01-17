import React from 'react';

import Aux from '../../../hoc/Auxiliary';

import classes from './Projects.css';

const projects = (props) => {
    let  p = props.projects;
    let ele = null;
    try{
        ele = p.map(i => {
            return <div className={classes.Proj} key={i.name}>
                    <a 
                    href={i.html_url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    >{i.name}</a> {props.highs.includes(i.name) ?  <span value="star" className="fa fa-star checked"></span> : null}
                    <p>{i.description}</p>
                    <p>{i.language !== null ? <span className={classes.Circle} value={i.language}></span> : null}
                    {i.language}
                    </p>
                    </div>
        });
    }catch{
        ele = <div className={classes.Proj}>
                    <p>{p.split('split')[0]}</p>
                    <a 
                        href={p.split('split')[1]}
                        target="_blank" 
                        rel="noopener noreferrer"
                        >{p.split('split')[1]}</a>
                    </div>
                }
    return ( 
        <Aux>
            <p className={classes.Text}>Here are my {p.length} public GitHub repositories, updated automatically via the GitHub API.</p>
            <p className={classes.Text}>You can visit the GitHub page for any of them by clicking the project name.</p>
            <div className={classes.Container}>{ele}</div>
        </Aux>
     );
}
 
export default projects;
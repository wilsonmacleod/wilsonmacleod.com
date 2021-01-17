import React from 'react';

import classes from './Menu.css';

const menu = (props) => {
    let active = props.active
    const cats  = ['About Me', 
                    'Projects',
                    'Websites',
                    'Contact']
    let  ele = [];
    for(let x = 0; x < cats.length;  x++){
        let link = <a 
            key={x}
            href="#" 
            onClick={props.clicked}
            className={x === active ? classes.ActiveLink : classes.DefaultLink}
            value={cats[x]}
            id={x}
            >{cats[x]}
            </a>
        ele.push(link);
        ele.push(<span key={`divider-${x}`} value={cats[x]}> | </span>);
    }
    return ( <div className={classes.Container}>
                {ele}
            </div> 
    );
}
 
export default menu;
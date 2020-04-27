import React from 'react';
// origin https://gist.github.com/CodeMyUI/b208f5a1b200aa4b7308b121ffe128b4

import classes from './Nav.css'

const nav = (props) => {
  const config = props.config;
  let ele =
    config.map(c => 
      <div className={classes.Card} key={c.title}>
      <div className={classes.Content}>
        <h3 className={classes.Title}>
              {c.title}
        </h3>
        <p className={classes.Copy}>
          {c.desc}
        </p>
        {c.techs.map(t => <span className={classes.Tech}>{t}</span>)}
        <a   
          href={c.siteLink}
          target="_blank" rel="noopener noreferrer"
          className={classes.Btn}>
          Site
          </a>
          <a   
          href={c.gitLink}
          target="_blank" rel="noopener noreferrer"
          className={classes.Btn}>
          GitHub
          </a>
      </div>
    </div>
  );

  return (
    <div className={classes.PageContent}>
        {ele}
    </div>
  );
}

export default nav;

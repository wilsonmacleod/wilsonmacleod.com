import React, { Component } from 'react';

import Layout from '../../Components/Layout/Layout';
import classes from './SiteContainer.css';

class SiteContainer extends Component {

    componentDidMount() {
        console.log(`Welcome to my site. I'd love to talk more 
specifically about my experiences, skills and interests. 
Feel free to email me at: wilsonmacleod@gmail.com`)
    }

    render() {
        return (
        <div className={classes.Background}>
            <Layout />
        </div>
        )
    }
}

export default SiteContainer;
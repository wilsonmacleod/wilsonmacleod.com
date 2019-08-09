import React, { Component } from 'react';

import Layout from '../../Components/Layout/Layout';
import classes from './SiteContainer.css';

class SiteContainer extends Component {

    componentDidMount() {
        console.log("Welcome to my site. I'd love to talk more specifically")
        console.log("about my experiences, skills and interests. Feel free to email me at:")
        console.log("wilsonmacleod@gmail.com")
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
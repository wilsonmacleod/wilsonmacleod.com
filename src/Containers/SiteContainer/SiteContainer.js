import React, { Component } from 'react';

import Layout from '../../Components/Layout/Layout';
import classes from './SiteContainer.css';

class SiteContainer extends Component {
    render () {
        return (
        <div className={classes.Background}>
            <Layout />
        </div>
        )
    }
}

export default SiteContainer;
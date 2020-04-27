import React, { Component } from 'react';

import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
import Nav from '../../Components/Nav/Nav';

import classes from './SiteContainer.css';

class SiteContainer extends Component {
    state = {
        welcomeMsg: `Welcome to my site. I'd love to talk more 
        specifically about my experiences, skills and interests. 
        Feel free to email me at: wilsonmacleod@gmail.com`,
        sites: [
            {
                title: 'NBA Shot Charts',
                desc: 'Generating charts based on data for every NBA shot and player for 2010-20.',
                techs: ['Django'],
                siteLink: 'https://nbashotcharts.wilsonmacleod.com/%2F',
                gitLink: 'https://github.com/wilsonmacleod/NBA_shot_charts'
            },
            {
                title: 'SpendEz',
                desc: 'Spending and budget tracking application.',
                techs:  ['Flask'],
                siteLink: 'https://ez.wilsonmacleod.com/spend-ez/login',
                gitLink: 'https://github.com/wilsonmacleod/Spend-Ez'
            },
            {
                title: 'GW2B',
                desc: 'Theorycrafting and character designing for a video game I enjoy.',
                techs:  ['Django REST', 'React.js'],
                siteLink: 'https://github.com/wilsonmacleod/GW2B',
                gitLink: 'https://github.com/wilsonmacleod/GW2B'
            },
            {
                title: 'MacBlog',
                desc: 'Blog template for writing about thoughts, learnings and experiences.',
                techs:  ['React.js'],
                siteLink: 'https://macblog.wilsonmacleod.com/',
                gitLink: 'https://github.com/wilsonmacleod/MacBlog'
            }
        ]
        }

    componentDidMount() {
        console.log(this.state.welcomeMsg)
    }

    render() {
        return (
        <div className={classes.Background}>
            <Header />
            <Body>
                <Nav 
                    config={this.state.sites}
                />
            </Body>
        </div>
        )
    }
}

export default SiteContainer;

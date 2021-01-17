import React, { Component } from 'react';
import axios from 'axios';

import Topbar from '../Components/Nav/Topbar/Topbar';
import Header from '../Components/Header/Header';
import Menu from '../Components/Nav/Menu/Menu';
import AboutMe from '../Components/Views/AboutMe/AboutMe';
import Projects from '../Components/Views/Projects/Projects';
import Sites from '../Components/Views/Sites/Sites';
import Contact from '../Components/Views/Contact/Contact';

import classes from './Container.css';


class Container extends Component {
    state = {
        isHidden: true,
        welcomeMsg: `Welcome to my site. I'd love to talk more 
        specifically about my experiences, skills and interests. 
        Feel free to email me at: wilsonmacleod@gmail.com`,
        view: 0,
        skills: [
            'Python',
            'Django',
            'PostgreSQL | SQLAlchemy',
            'Javascript',
            'ReactJS',
            'Pandas',
            'Git',
            'Task Automation'
        ],
        projects: '',
        highlightProjects: ['Desktop-Lackey', 'NBA_shot_charts'],
        sitesConfig: [
            {
                title: 'NBA Shot Charts',
                desc: 'Generating charts based on data for every NBA shot and player for 2010-20.',
                techs: ['Django'],
                siteLink: 'https://nbashotcharts.wilsonmacleod.com/%2F',
                gitLink: 'https://github.com/wilsonmacleod/NBA_shot_charts'
            },
            {
                title: 'GW2B',
                desc: 'Theorycrafting and character designing for a video game I enjoy.',
                techs:  ['Django REST & React.js'],
                siteLink: 'https://github.com/wilsonmacleod/GW2B',
                gitLink: 'https://github.com/wilsonmacleod/GW2B'
            },
            {
                title: 'MacBlog',
                desc: 'Blog template for writing about thoughts, learnings and experiences.',
                techs:  ['React.js'],
                siteLink: 'https://macblog.wilsonmacleod.com/',
                gitLink: 'https://github.com/wilsonmacleod/MacBlog'
            },
            {
                title: 'SpendEz',
                desc: 'Spending and budget tracking application.',
                techs:  ['Flask'],
                siteLink: 'https://ez.wilsonmacleod.com/spend-ez/login',
                gitLink: 'https://github.com/wilsonmacleod/Spend-Ez'
            }
        ]
    };

    componentDidMount() {
        console.log(this.state.welcomeMsg);
        window.addEventListener('scroll', this.handleScroll)
        axios.get(`https://api.github.com/users/wilsonmacleod/repos?sort=created`)
        .then(response => 
            this.setState({projects: response.data}))
        .catch(error => {
            this.setState({projects: `The Github API appears to be down, please
            see my Github here: split https://github.com/wilsonmacleod`})
        });
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    };

    handleScroll = () => {
        if(window.pageYOffset > 0){
            this.setState({isHidden: false})
        }else{
            this.setState({isHidden: true})
        };
    };

    viewChangeHandler = (e) => {
        let newView = e.target.id;
        let viewState = this.state.view;
        viewState = Number(newView);
        this.setState({
            view: viewState
        })
    };

    render() {
        let viewDict = {
            0: <AboutMe skills={this.state.skills} />,
            1: <Projects projects={this.state.projects} highs={this.state.highlightProjects} favs={this.state.favsConfig}/>,
            2: <Sites config={this.state.sitesConfig} />,
            3: <Contact />
        }
        let activeContent = viewDict[this.state.view];
        return (
        <div className={classes.Background}>
            <Topbar 
                isHidden={this.state.isHidden}
            />
            <Header />
            <Menu 
                active={this.state.view}
                clicked={this.viewChangeHandler}
                />
            <div>
                {activeContent}
            </div>
        </div>
        )
    };
};

export default Container;
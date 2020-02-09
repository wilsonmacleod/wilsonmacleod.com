import React, { Component } from 'react';

import MenuButton from './MenuButton/MenuButton';
import SpendEZ from './MenuButton/Carousels/SpendEz/SpendEz';
import Projects from './MenuButton/Carousels/Projects/Projects';
import Interests from './MenuButton/Carousels/Interests/Interests';
import GW2B from './MenuButton/Carousels/GW2B/GW2B';

import classes from './NavMenu.css';

class NavMenu extends Component {
    
    state = {
        counter: {
        ez: 0,
        projects: 0,
        interests: 0,
        gw2b: 0
        }
     }

    carousel = (type) => {
        let oldCounter = this.state.counter[type];
        const updatedCounter = oldCounter += 1;
        const updated = {
            ...this.state.counter
        }
        updated[type] = updatedCounter;
        if (updatedCounter >= 6) {
            this.setState({         
                counter: {
                    ez: 0,
                    projects: 0,
                    interests: 0,
                    gw2b: 0
                } 
            })
        }else{
            this.setState({ counter: updated })
        }
    }

    carouselStartHandler = (type) => {
        this.interval = setInterval(()=>this.carousel(type), 225)   
     }

    carouselEndHandler = () => {
        clearInterval(this.interval);
    }

    render() {
         
        return ( 
            <div className={classes.GridWrapper}>
            <div className={classes.GridItem}>
                    <MenuButton>
                    <SpendEZ 
                    counter={this.state.counter.ez}
                    started={()=>this.carouselStartHandler('ez')}
                    ended={this.carouselEndHandler}
                    />
                    </MenuButton>
                </div>
                <div className={classes.GridItem}>
                    <MenuButton>
                    <Projects
                    counter={this.state.counter.projects}
                    started={()=>this.carouselStartHandler('projects')}
                    ended={this.carouselEndHandler}
                    />
                    </MenuButton>
                </div>
                <div className={classes.GridItem}>
                    <MenuButton>
                    <Interests 
                    counter={this.state.counter.interests}
                    started={()=>this.carouselStartHandler('interests')}
                    ended={this.carouselEndHandler}
                    />
                    </MenuButton>
                </div>
                <div className={classes.GridItem}>
                    <MenuButton>
                    <GW2B 
                    counter={this.state.counter.gw2b}
                    started={()=>this.carouselStartHandler('gw2b')}
                    ended={this.carouselEndHandler}
                    />
                    </MenuButton>
                </div>
        </div>
         );
    }
}
 
export default NavMenu;
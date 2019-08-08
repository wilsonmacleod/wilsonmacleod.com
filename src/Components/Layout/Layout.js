import React, { Component } from 'react';

import Header from './Header/Header';
import Body from './Body/Body';
import Modal from '../UI/Modal/Modal';
import NavButton from '../Navigation/NavButton/NavButton';
import Logo from './Logo/Logo';
import Aux from '../../hoc/Auxiliary';
import NavMenu from '../Navigation/NavMenu/NavMenu';

class Layout extends Component {

    state = {
        showModal: false
    }

    componentDidMount () {
        console.log("Welcome to my site. I'd love to talk more specifically")
        console.log("about my experiences, skills and interests, feel free to email me at:")
        console.log("wilsonmacleod@gmail.com")
    }

    showModalHandler = () => {
        this.setState({ showModal: true })
    };

    hideModalHandler = () => {
        this.setState({ showModal: false })
    }
    

      
    render () {
        return (
        <Aux>
           <Header />
           <Modal 
                show={this.state.showModal}
                modalClosed={this.hideModalHandler}>
                <NavMenu />
            </Modal>
            <Body />
            <NavButton
                label={"MORE"}
                clicked={this.showModalHandler}
            />
            <Logo />
        </Aux>
        )
    }
}

export default Layout;
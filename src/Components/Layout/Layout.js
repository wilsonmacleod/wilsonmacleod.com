import React, { Component } from 'react';

import Header from './Header/Header';
import Body from './Body/Body';
import Logo from './Logo/Logo';
import NavButton from '../Navigation/NavButton/NavButton';
import Aux from '../../hoc/Auxiliary';

class Layout extends Component {
    render () {
        return (
            <Aux>
           <Header />
            <Body />
            <Logo />
            <NavButton 
            label={'MORE'}
            />
            </Aux>
        )
    }
}

export default Layout;
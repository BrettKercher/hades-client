/**
 * Created by Brett on 5/1/2017.
 */

import React, { Component } from 'react';

import Header from './ui-menu-header';
import Content from './content/ui-menu-content';
import Footer from './ui-menu-footer';

class MenuUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let style = {
            flexDirection: 'column',
            height: '100vh',
            display: 'flex'
        };

        return (
            <div style={style}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default MenuUI;
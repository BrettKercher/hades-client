/**
 * Created by Brett on 5/1/2017.
 */

import React, { Component } from 'react';

import Header from './ui-menu-header';
import Content from './ui-menu-content';
import Footer from './ui-menu-footer';

class MenuUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default MenuUI;
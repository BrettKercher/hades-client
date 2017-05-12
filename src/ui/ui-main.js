/**
 * Created by Brett on 4/29/2017.
 */

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './menu/ui-menu';
import Game from './game/ui-game';

class UI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Menu} />
                    <Route path='/game' component={Game} />
                </div>
            </BrowserRouter>
        )
    }
}

export default UI;
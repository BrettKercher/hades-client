/**
 * Created by Brett on 5/8/2017.
 */

import React, { Component } from 'react';

class MenuTitleUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let style = {
            fontFamily: '',
            fontSize: '128px',
            textShadow: '0 1px 0 #c4c4c4, 0 2px 0 #c4c4c4, 0 3px 0 #c4c4c4, 0 4px 0 #c4c4c4, 0 5px 0 #c4c4c4, 0 6px 0 #c4c4c4, 0 7px 0 #c4c4c4, 0 8px 0 #c4c4c4, 0 9px 0 #c4c4c4'
        };

        return (
            <div style={style}>I love babe</div>
        )
    }
}

export default MenuTitleUI;
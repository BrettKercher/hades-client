/**
 * Created by Brett on 5/8/2017.
 */

import React, { Component } from 'react';

class MenuPanelUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let style = {
            margin: '5px',
            padding: '18px',
            display: 'inline-block',
            backgroundColor: '#FFF',
            boxShadow: '0px 7px #c4c4c4',
            borderRadius: '4px',
            color: 'black',
            width: '30%'
        };

        return (
            <div style={style}>
                { this.props.children }
            </div>
        )
    }
}

export default MenuPanelUI;
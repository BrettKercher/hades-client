/**
 * Created by Brett on 5/1/2017.
 */

import React, { Component } from 'react';

class MenuHeaderUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let style = {
            height: '60px'
        };

        return (
            <div style={style}>
                <h4>Header</h4>
            </div>
        )
    }
}

export default MenuHeaderUI;
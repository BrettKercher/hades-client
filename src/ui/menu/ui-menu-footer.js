/**
 * Created by Brett on 5/1/2017.
 */

import React, { Component } from 'react';

class MenuFooterUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let style = {
            height: '60px'
        };

        return (
            <div style={style}>
                <h4>Footer</h4>
            </div>
        )
    }
}

export default MenuFooterUI;
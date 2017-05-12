/**
 * Created by Brett on 5/1/2017.
 */

import React, { Component } from 'react';
import Title from './ui-menu-title';
import Panel from './ui-menu-panel';
import { Button } from 'react-bootstrap';

class MenuContentUI extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onChange = this.onChange.bind(this);
        this.onFindMatch = this.onFindMatch.bind(this);
    }

    onChange(event) {
        this.setState({value: event.target.value});
    }

    onFindMatch(event) {
        $.getJSON('https://jsonplaceholder.typicode.com/posts/1').then(
            function(response) {
                console.log("Success: " + response.body);
            },
            function(error) {
                console.log("Error: " + error);
            }
        );
        event.preventDefault();
    }

    render() {

        let style = {
            base: {
                flex: '1',
                margin: '0 auto',
                width: '75%',
                textAlign: 'center',
            },
            section: {
                width:'calc(100% / 3)'
            },
            input: {
                width:'100%'
            }
        };

        return (
            <div style={style.base}>
                <Title/>
                <div>

                </div>
                <Panel style={style.section}>
                    <input style={style.input} type="text" value={this.state.value} onChange={this.onChange} placeholder="Nickname"/>
                    <div className="line"/>
                    <Button onClick={this.onFindMatch}>Find Match</Button>
                </Panel>
                <Panel style={style.section}>
                    <input type="text" value={this.state.value} onChange={this.onChange} placeholder="Nickname"/>
                    <div className="line"/>
                    <Button onClick={this.onFindMatch}>Find Match 2</Button>
                </Panel>
                <Panel style={style.section}>
                    <input type="text" value={this.state.value} onChange={this.onChange} placeholder="Nickname"/>
                    <div className="line"/>
                    <Button onClick={this.onFindMatch}>Find Match 3</Button>
                </Panel>
            </div>
        )
    }
}

export default MenuContentUI;
/**
 * Created by Brett on 4/21/2017.
 */

//Style
require('../prototype.css');
import 'bootstrap/dist/css/bootstrap.css';

//UI
import React from 'react';
import ReactDOM from'react-dom';
import UI from './ui/ui-main';

//Render UI
ReactDOM.render(< UI />, document.querySelector('#root'));

// click play button
// send request to FES with user info (pretty much just name?) in body
//...
// FES talks to the MM service and puts the client on the MM Queue
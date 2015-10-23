/**
 * Created by shawnsandy on 6/4/15.
 */


/**
 * webpack compiled components sample file
 */

// import the react component
import React from 'react';
import ReactDOM from 'react-dom';
import Sample from'../src/index.js';
import { Button } from '../src/samples/button-component';

// render the main component
ReactDOM.render(<Sample />, document.getElementById('component'));
ReactDOM.render(<Button />, document.getElementById('button'));

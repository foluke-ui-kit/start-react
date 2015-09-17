/**
 * Created by shawnsandy on 6/4/15.
 */
'use strict';

/**
 * webpack compiled components sample file
 */

// import the react component
import React from 'react'
import ReactDOM from 'react-dom'
import Sample, { Button }  from'../src/libs/samples.jsx'
// render the main component
ReactDOM.render(<Sample />, document.getElementById('component'));
// render the Button component using the
ReactDOM.render(<Button />, document.getElementById('button'));
// render the Button component with props
ReactDOM.render(<Button name="My Sample Button" />, document.getElementById('sbutton'));
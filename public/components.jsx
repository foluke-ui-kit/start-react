/**
 * Created by shawnsandy on 6/4/15.
 */

//var React = require("react");
//var $ = require('jquery');

/**
 * webpack compiled components sample file
 */

// import the component
import React from 'react'
import Sample from '../src/libs/samples.jsx'
import Button from '../src/libs/button.jsx'
//var Sample = require('../src/libs/samples.jsx');
// render the main component
React.render(<Sample />, document.getElementById('component'));
// render the NameSpaced child component using the
React.render(<Button />, document.getElementById('button'));
// render the NameSpaced child component with props
React.render(<Button name="Sample Button" />, document.getElementById('sbutton'));
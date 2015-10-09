/**
 * Created by shawnsandy on 6/4/15.
 */
'use strict';

/**
 * webpack compiled components sample file
 */

// import the react component
import React from 'react';
import ReactDOM from 'react-dom';
import Sample from'../src/libs/samples.js';

// render the main component
ReactDOM.render(<Sample />, document.getElementById('component'));

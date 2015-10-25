/**
 * Created by shawnsandy on 6/4/15.
 */

// import the react/dom components
import React from 'react';
import ReactDOM from 'react-dom';
// reaname App to Sample on import
import {default as App} from '../src/index';
// import the export as named
import { Button } from '../src/samples/button-component';
// render out the components
ReactDOM.render(<App />, document.getElementById('component'));
ReactDOM.render(<Button />, document.getElementById('button'));

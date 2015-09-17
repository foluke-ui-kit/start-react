webpackJsonp([0,1],[
/* 0 */
/*!*******************************!*\
  !*** ./public/components.jsx ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by shawnsandy on 6/4/15.
	 */
	
	//var React = require("react");
	//var $ = require('jquery');
	
	/**
	 * webpack compiled components sample file
	 */
	
	// import the react component
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	// import $ from 'jquery'
	
	var _srcLibsSamplesJsx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../src/libs/samples.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _srcLibsSamplesJsx2 = _interopRequireDefault(_srcLibsSamplesJsx);
	
	// render the main component
	_reactDom2['default'].render(_react2['default'].createElement(_srcLibsSamplesJsx2['default'], null), document.getElementById('component'));
	// render the Button component using the
	_reactDom2['default'].render(_react2['default'].createElement(_srcLibsSamplesJsx.Button, null), document.getElementById('button'));
	// render the Button component with props
	_reactDom2['default'].render(_react2['default'].createElement(_srcLibsSamplesJsx.Button, { name: 'My Sample Button' }), document.getElementById('sbutton'));

/***/ }
]);
//# sourceMappingURL=bundle.js.map
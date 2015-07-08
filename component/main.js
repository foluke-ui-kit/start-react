webpackJsonp([0],{

/***/ 0:
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
	
	// import the component
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _srcLibsSamplesJsx = __webpack_require__(/*! ../src/libs/samples.jsx */ 157);
	
	var _srcLibsSamplesJsx2 = _interopRequireDefault(_srcLibsSamplesJsx);
	
	var _srcLibsButtonJsx = __webpack_require__(/*! ../src/libs/button.jsx */ 158);
	
	var _srcLibsButtonJsx2 = _interopRequireDefault(_srcLibsButtonJsx);
	
	//var Sample = require('../src/libs/samples.jsx');
	// render the main component
	_react2['default'].render(_react2['default'].createElement(_srcLibsSamplesJsx2['default'], null), document.getElementById('component'));
	// render the NameSpaced child component using the
	_react2['default'].render(_react2['default'].createElement(_srcLibsButtonJsx2['default'], null), document.getElementById('button'));
	// render the NameSpaced child component with props
	_react2['default'].render(_react2['default'].createElement(_srcLibsButtonJsx2['default'], { name: 'Sample Button' }), document.getElementById('sbutton'));

/***/ },

/***/ 157:
/*!******************************!*\
  !*** ./src/libs/samples.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	/**
	 *
	 * @type {*|exports}
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	/**
	 * Briefly describe your Element here
	 */
	
	var Component = (function (_React$Component) {
	    function Component(props) {
	        _classCallCheck(this, Component);
	
	        _get(Object.getPrototypeOf(Component.prototype), 'constructor', this).call(this, props);
	    }
	
	    _inherits(Component, _React$Component);
	
	    _createClass(Component, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'h3',
	                    null,
	                    'Sample Component'
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias quia quibusdam quidem recusandae reiciendis saepe similique, sit tempore tenetur vel. Accusantium culpa est fuga quae vel.'
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quod, velit. Consectetur corporis eos expedita fuga odio sunt vitae voluptates.'
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    'Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non nulla obcaecati, quae similique sit tempore veritatis voluptas!'
	                )
	            );
	        }
	    }]);
	
	    return Component;
	})(_react2['default'].Component);
	
	exports['default'] = Component;
	module.exports = exports['default'];

/***/ },

/***/ 158:
/*!*****************************!*\
  !*** ./src/libs/button.jsx ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	// Button.jsx
	//
	/**
	 * Created by shawnsandy on 6/4/15.
	 */
	
	/**
	 * Namespaced react component
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Button = (function (_React$Component) {
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
	    }
	
	    _inherits(Button, _React$Component);
	
	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	
	            return _react2['default'].createElement(
	                'button',
	                { className: 'btn btn-default' },
	                this.props.name
	            );
	        }
	    }]);
	
	    return Button;
	})(_react2['default'].Component);
	
	exports['default'] = Button;
	
	Button.PropTypes = {};
	
	Button.defaultProps = {
	    name: 'Button'
	};
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=main.js.map
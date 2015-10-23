webpackJsonp([0],{

/***/ 0:
/*!******************************!*\
  !*** ./public/components.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by shawnsandy on 6/4/15.
	 */
	
	/**
	 * webpack compiled components sample file
	 */
	
	// import the react component
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 157);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _srcIndexJs = __webpack_require__(/*! ../src/index.js */ 158);
	
	var _srcIndexJs2 = _interopRequireDefault(_srcIndexJs);
	
	var _srcSamplesButtonComponent = __webpack_require__(/*! ../src/samples/button-component */ 159);
	
	// render the main component
	_reactDom2['default'].render(_react2['default'].createElement(_srcIndexJs2['default'], null), document.getElementById('component'));
	_reactDom2['default'].render(_react2['default'].createElement(_srcSamplesButtonComponent.Button, null), document.getElementById('button'));

/***/ },

/***/ 158:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	/**
	 *
	 * @type {*|exports}
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _samplesButtonComponent = __webpack_require__(/*! ./samples/button-component */ 159);
	
	/**
	 * Basic sample component displays a title and lorem paragraph
	 */
	
	var Component = (function (_React$Component) {
	  _inherits(Component, _React$Component);
	
	  function Component() {
	    _classCallCheck(this, Component);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  /**
	   * Rect stateless components
	   */
	
	  // export const Button = ({
	  //   children = 'Sample Button',
	  // }) => (
	  //   <button className="btn btn-info">
	  //     {children}
	  //   </button>
	  // );
	  //
	  // export const Container = (props) => (
	  //   <div clasName="lead">
	  //     {props.children}
	  //   </div>
	  // );
	
	  Component.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'aside',
	      { className: 'hello-component' },
	      _react2['default'].createElement(
	        'h3',
	        null,
	        'A Sample Component'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias. Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non!'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        _react2['default'].createElement(_samplesButtonComponent.Button, { children: 'Component Button' })
	      ),
	      _react2['default'].createElement(
	        _samplesButtonComponent.Container,
	        null,
	        _react2['default'].createElement(
	          'p',
	          { className: 'lead' },
	          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quibusdam excepturi saepe et hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, accusantium!'
	        )
	      )
	    );
	  };
	
	  return Component;
	})(_react2['default'].Component);
	
	exports['default'] = Component;
	module.exports = exports['default'];

/***/ },

/***/ 159:
/*!*****************************************!*\
  !*** ./src/samples/button-component.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	/**
	 * Rect stateless components
	 */
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Button = function Button(_ref) {
	  var _ref$children = _ref.children;
	  var children = _ref$children === undefined ? 'Sample Button' : _ref$children;
	  return _react2['default'].createElement(
	    'button',
	    { className: 'btn btn-info' },
	    ' ',
	    children,
	    ' '
	  );
	};
	
	exports.Button = Button;
	var Container = function Container(props) {
	  return _react2['default'].createElement(
	    'div',
	    { clasName: 'lead' },
	    ' ',
	    props.children,
	    ' '
	  );
	};
	exports.Container = Container;

/***/ }

});
//# sourceMappingURL=sample.js.map
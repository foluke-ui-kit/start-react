webpackJsonp([0],{

/***/ 0:
/*!*******************************!*\
  !*** ./public/components.jsx ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by shawnsandy on 6/4/15.
	 */
	
	var React = __webpack_require__(/*! react */ 1);
	var $ = __webpack_require__(/*! jquery */ 157);
	
	/**
	 * components`
	 */
	
	var Sample = __webpack_require__(/*! ../src/libs/samples.jsx */ 158);
	
	
	React.render(React.createElement(Sample, null), document.getElementById('sample'));
	


/***/ },

/***/ 158:
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
	var React = __webpack_require__(/*! react */ 1);
	
	
	
	/**
	 * Briefly describe your Element here
	 */
	
	var Component = React.createClass({displayName: "Component",
	
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h3", null, "Component"), 
	                React.createElement("div", {className: ""}, " A sample Component")
	            )
	        );
	    }
	
	});
	
	
	/**
	 * setup your react component
	 */
	Component.Hello = React.createClass({displayName: "Component.Hello",
	
	    /**
	     * set your prop validations
	     *  // You can declare that a prop is a specific JS primitive. By default, these
	     *  // are all optional.
	     *  optionalArray: React.PropTypes.array,
	     *  optionalBool: React.PropTypes.bool,
	     *  optionalFunc: React.PropTypes.func,
	     *  optionalNumber: React.PropTypes.number,
	     *  optionalObject: React.PropTypes.object,
	     *  optionalString: React.PropTypes.string,
	     */
	    //propTypes: {},
	
	    /**
	     * define misins
	     */
	    //mixins: [],
	
	    /**
	     * Set the default values for your states
	     */
	    //getInitialState: function () {},
	
	    /**
	     * det the props default
	     */
	    getDefaultProps: function () {
	        return {
	            name: 'John Hannock'
	
	        }
	    },
	
	    /**
	     *
	     */
	    //componentWillMount: function () {},
	
	    /**
	     *
	     */
	    //componentWillReceiveProps: function () {},
	
	    /**
	     *
	     */
	    //componentDidMount: function () {},
	
	    /**
	     *
	     */
	    //componentWillUnmount: function () {},
	
	    render: function () {
	        return (
	            React.createElement("div", {className: "hello"}, 
	                "Hello ",  this.props.name
	            )
	        );
	    }
	});
	
	
	/**
	 * export the element
	 */
	module.exports = Component;


/***/ }

});
//# sourceMappingURL=main.js.map
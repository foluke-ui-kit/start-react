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
	//var $ = require('jquery');
	
	/**
	 * webpack compiled components sample file
	 */
	// import the component
	var Sample = __webpack_require__(/*! ../src/libs/samples.jsx */ 157);
	// render the main component
	React.render(React.createElement(Sample, null), document.getElementById('component'));
	// render the NameSpaced child component using the
	React.render(React.createElement(Sample.Button, null), document.getElementById('button'));
	// render the NameSpaced child component with props
	React.render(React.createElement(Sample.Button, {name: "Sample Button"}), document.getElementById('sbutton'));
	


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
	var React = __webpack_require__(/*! react */ 1);
	
	
	
	/**
	 * Briefly describe your Element here
	 */
	
	var Component = React.createClass({displayName: "Component",
	
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("h3", null, "Sample Component"), 
	                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias quia quibusdam quidem recusandae reiciendis saepe similique, sit tempore tenetur vel? Accusantium culpa est fuga quae vel."), 
	                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quod, velit? Consectetur corporis eos expedita fuga odio sunt vitae voluptates."), 
	                React.createElement("p", null, "Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non nulla obcaecati, quae similique sit tempore veritatis voluptas!")
	
	            )
	        );
	    }
	
	});
	
	
	/**
	 * Namespaced react component
	 */
	Component.Button = React.createClass({displayName: "Component.Button",
	
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
	            name: 'My Button'
	
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
	            React.createElement("button", {className: "btn btn-default"}, 
	                 this.props.name
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
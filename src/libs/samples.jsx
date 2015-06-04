/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
var React = require('react');



/**
 * Briefly describe your Element here
 */

var Component = React.createClass({

    render: function () {
        return (
            <div>
                <h3>Sample Component</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias quia quibusdam quidem recusandae reiciendis saepe similique, sit tempore tenetur vel? Accusantium culpa est fuga quae vel.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quod, velit? Consectetur corporis eos expedita fuga odio sunt vitae voluptates.</p>
                <p>Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non nulla obcaecati, quae similique sit tempore veritatis voluptas!</p>
            </div>
        );
    }

});


/**
 * setup your react component
 */
Component.Hello = React.createClass({

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
            <div className="hello">
                Hello { this.props.name }
            </div>
        );
    }
});


/**
 * export the element
 */
module.exports = Component;

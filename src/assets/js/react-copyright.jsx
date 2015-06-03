'use strict';
/** @jsx React.DOM */

var React = require('react');

/**
 * get the current_year
 */
var current_year = new Date().getFullYear();


/**
 * setup your react component
 */
var ReactCopyright = React.createClass({

    /**
     *
     * @returns {{slug: string}}
     */

    getDefaultProps : function(){
      return {
          "slug" : "All Rights Reserved"
      };
    },


    /**
     * render component
     * @returns {XML}
     */
    render: function () {
        return (
            <div className="site-copyrights">
            &copy; { current_year } <span className="copyright-slug">{ this.props.slug }</span>
            </div>
        );
    }
});

module.exports = ReactCopyright;


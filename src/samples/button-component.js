/**
 * @jsx React.DOM
 */

/**
 * Rect stateless components
 */
import React from 'react';

export const Button = ({
children = 'Sample Button',
}) => (< button className = "btn btn-info" > {
  children
} < /button>);

export const Container = (props) => (< div clasName = "lead" > {
  props.children
} < /div>);

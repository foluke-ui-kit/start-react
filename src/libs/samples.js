/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */

import React from 'react';

/**
 * Rect stateless components
 */

const Button = ({
  children = 'Sample Button'
}) => (
  <button className="btn btn-info">
    {children}
  </button>
);

/**
 * Basic sample component displays a title and lorem paragraph
 */
export default class Component extends React.Component {

  render() {
    return (

      <aside className="hello-component">
        <h3>A Sample Component</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias </p>
        <p>Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non!</p>
        <Button name="Component Button"/>
      </aside>

    );
  }
}

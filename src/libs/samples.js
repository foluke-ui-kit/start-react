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

export const Button = ({
  children = 'Sample Button'
}) => (
  <button className="btn btn-info">
    {children}
  </button>
);

export const Container = (props) => (
  <div clasName="lead">
    {props.children}
  </div>
);

/**
 * Basic sample component displays a title and lorem paragraph
 */
export default class Component extends React.Component {

  render() {
    return (

      <aside className="hello-component">
        <h3>A Sample Component</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias. Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non!</p>
        <p>
          <Button children="Component Button"/>
          </p>
          <Container>
            <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quibusdam excepturi saepe et hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, accusantium!
            </p>
          </Container>
      </aside>

    );
  }
}

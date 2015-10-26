/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
// import Styles from './style.css';
import React from 'react';
import { Button, Container} from './components/button-component';

/**
 * Basic sample component displays a title and lorem paragraph
 */
export default class extends React.Component {

  render() {
    return (

      <aside className="hello-component">
        <h3>A Sample App</h3>
        <p className="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias. Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non!</p>
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

/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
import React from 'react'
import classNames from 'classnames'


/**
 * Basic sample component displays a title and lorem paragraph
 */


export default class Component extends React.Component {
   

    render(){
                return (
            <div>
                <h3>Sample Component</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias quia quibusdam quidem recusandae reiciendis saepe similique, sit tempore tenetur vel. Accusantium culpa est fuga quae vel.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quod, velit. Consectetur corporis eos expedita fuga odio sunt vitae voluptates.</p>
                <p>Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non nulla obcaecati, quae similique sit tempore veritatis voluptas!</p>
                <Button name="Component Button" />

            </div>
        );
    }
}


/**
 * A sample button component a couple of props
 * uses classnames to join selectors together
 * 
 */
export class Button extends React.Component {

    static defaultProps = {
        name: 'Button',
    }

    static propTypes  = {
        name: React.PropTypes.string
    }

    constructor(props){
        super(props);
    }

    render() {
        var classnames = classNames(this.props.btnClass );
        return (
            <button className={ classnames }>
                { this.props.name }
            </button>
        );
    }
}





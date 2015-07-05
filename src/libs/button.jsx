// Button.jsx
// 
/**
 * Created by shawnsandy on 6/4/15.
 */



/**
 * Namespaced react component
 */
import React from 'react'

export default class Button extends React.Component {


    constructor(props){

        super(props);

    }

    render() {
        
        return (
            <button className="btn btn-default">
                { this.props.name }
            </button>
        );
        
    }
}



Button.PropTypes = {

}

Button.defaultProps = {
    name: 'Button'
}

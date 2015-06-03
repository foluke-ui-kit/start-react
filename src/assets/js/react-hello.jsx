/**
 * Created by studio-mac on 1/31/15.
 */

/**
 * setup your react component
 */

var Hello = React.createClass({
    render: function () {
        return (
            <div className="hello">
                <h1>Hello { this.props.name } </h1>
            </div>
        );
    }
});

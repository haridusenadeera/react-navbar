/** @jsx React.DOM */

var MyComponent = React.createClass({
    render: function(){
        return (
            <a href ="http://www.google.com">Hello, {this.props.name}!</a>
        );
    }
});

React.render(<MyComponent name="there" />, document.getElementById('myDiv'));

/** @jsx React.DOM */

var MyComponent = React.createClass({
    render: function(){
        return (
            <a href="http://www.google.com">Haridu Senadeera</a>
        );
    }
});

React.render(
    <MyComponent/>,
    document.getElementById('myDiv')
);

/*** @jsx React.DOM */
var Navbar_title = React.createClass({
  render: function() {
    // This takes any props passed to CheckLink and copies them to <a>
    return <a {...this.props}></a>;
  }
});

React.render(
  <Navbar_title href="https://www.google.com">
    Navigation Title
  </Navbar_title>,
  document.getElementById('content')
);

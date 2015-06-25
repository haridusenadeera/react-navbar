class ExampleComponent extends React.Component {
 render() { 
  return <div onClick={this._handleClick}>Hello, world.</div>;
 }
 _handleClick() {
  console.log(this);
 }
}

React.render(<ExampleComponent />, document.getElementById('content'));
/** @jsx React.DOM */

var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  decrementCount: function(){
    this.setState({
      count: this.state.count - 1
    });
  },
  getInitialState: function(){
     return {
       count: 10
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>IncrementCount</button>
        <button type="button" onClick={this.decrementCount}>DecrementCount</button>
      </div>
    );
  }
});

React.render(<Counter/>, document.getElementById('myDiv'));

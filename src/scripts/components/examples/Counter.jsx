
import React from 'react';
import Button from './Button';

export class Counter extends React.Component {

  constructor (){
    super();
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.state = {count: 0 };

  }

  incrementCount(){
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount(){
    this.setState({
      count: this.state.count - 1
    });
  }

  render(){
    return (
      <div className ="counter">
        <h1>Count: {this.state.count}</h1>
        <button type="button" className="btn btn-success" onClick={this.incrementCount}>IncrementCount</button>&nbsp;
        <button type="button" className="btn btn-success" onClick={this.decrementCount}>DecrementCount</button>
        <h3>This is okay </h3>
        <h2>I am reactive </h2>
        <Button {...this.props}/>
      </div>
    );
  }
}







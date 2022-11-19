import React, { Component, useEffect, useState } from "react";

type CounterProps = {
  incident: string;
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0
  }
  increment = () => {
    this.setState(({count}) => ({
      count: count + 1
    }))
  }
  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <main className="Counter">
        <h1>Days Since Last {this.props.incident}</h1>
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" value={this.state.count} onChange={(event) =>  this.setState({
              count: +event.target.value
            })} />
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

function App() {
  return <Counter incident="Coffee Spill" />
}

export default App;

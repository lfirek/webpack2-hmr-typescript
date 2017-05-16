import * as React from 'react';

class App extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context)
    this.state = { counter: 0 }
  }

  render() {
    return (
      <div onClick={() => this.setState({ counter: this.state.counter + 1})}>
        Click Me {this.state.counter }
      </div >
    );
  }
}

export default App;
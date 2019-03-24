import React, { Component } from 'react';
import ListaProdutos from './components/ListaProdutos';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
             <ListaProdutos></ListaProdutos>
             <Counter></Counter>
          </Provider>
      </div>
    );
  }
}

export default App;

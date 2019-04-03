import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import React, { Component } from 'react';
import { TodoList } from './components/TodoList'
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <TodoList/>
      </ApolloProvider>
    );
  }
}

export default App;

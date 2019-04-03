import React from 'react'
import { Query } from 'react-apollo'

import todoesQuery from '../query/todoes'
import { TodoesVariables, Todoes } from '../query/types/todoes'

class TodoesQuery extends Query<Todoes, TodoesVariables> {}

export const TodoList = () => (
  <TodoesQuery query={todoesQuery} variables={{first: 5}}>
    {({ data, error, loading }) => {
      console.log(data)
      console.log(error)
      if (loading) {
        return <h1>Loading!</h1>
      } else if(error) {
        return (
          <React.Fragment>
            <h1>Error!</h1>
            <p>{JSON.stringify(error)}</p>
          </React.Fragment>
        )
      } else if (data) {
        return (<React.Fragment>
          <h1>Todos</h1>
          <ol>
            {data.todoes.map(todo => <li key={todo.id}>{todo.title}</li>)}
          </ol>
        </React.Fragment>)
      }
    }
  }
  </TodoesQuery>
)

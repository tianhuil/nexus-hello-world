import { gql } from 'apollo-boost'
export default gql`
  query Todoes($first: Int!) {
    todoes(first: $first) {
      id
      title
      done
    }
  }
`

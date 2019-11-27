import gql from 'graphql-tag'

export const testQuery = gql`
  query testQuery($input: TestInput) {
    test(input: $input) {
      id
      tokenId
    }
  }
`

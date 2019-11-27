import gql from 'graphql-tag'

export const signUp = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input)
  }
`
export const logIn = gql`
  mutation logIn($input: LogInInput!) {
    logIn(input: $input)
  }
`

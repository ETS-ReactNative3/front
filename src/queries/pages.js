import gql from 'graphql-tag'

// Check current status
const networkStatus = navigator.onLine ? 'online' : 'offline'
console.log(networkStatus)
// Listen for status changes
window.addEventListener('online', () => {
  console.log('online')
})

window.addEventListener('offline', () => {
  console.log('offline')
})

export const GET_ALL_PAGES =
  networkStatus === 'online'
    ? gql`
        query allPagesQuery {
          allPages {
            id
            name
            sort
          }
        }
      `
    : gql`
        query allPagesQuery {
          allPages @client {
            id
            name
            sort
          }
        }
      `

export const CREATE_PAGE = gql`
  mutation createPage($input: PageInput!) {
    createPage(input: $input) {
      name
      sort
    }
  }
`

export const UPDATE_PAGE = gql`
  mutation updatePage($input: UpdatePageInput!) {
    updatePage(input: $input) {
      id
      name
      sort
    }
  }
`

export const DELETE_PAGE = gql`
  mutation deletePage($input: DeletePageInput!) {
    deletePage(input: $input) {
      id
    }
  }
`

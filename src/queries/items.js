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

export const GET_ALL_ITEMS =
  networkStatus === 'online'
    ? gql`
        query allItemsQuery {
          allItems {
            id
            name
            sort
          }
        }
      `
    : gql`
        query allItemsQuery {
          allItems @client {
            id
            name
            sort
          }
        }
      `

export const CREATE_ITEM = gql`
  mutation createItem($input: ItemInput!) {
    createItem(input: $input) {
      name
    }
  }
`

export const UPDATE_ITEM = gql`
  mutation updateItem($input: UpdateItemInput!) {
    updateItem(input: $input) {
      id
      name
      sort
    }
  }
`

export const DELETE_ITEM =
  networkStatus === 'online'
    ? gql`
        mutation deleteItem($input: DeleteItemInput!) {
          deleteItem(input: $input) {
            id
          }
        }
      `
    : gql`
        mutation deleteItem($input: DeleteItemInput!) @client {
          deleteItem(input: $input) {
            id
          }
        }
      `

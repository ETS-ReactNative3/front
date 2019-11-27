import React, { Component, Fragment } from 'react'
import { graphql, withApollo } from 'react-apollo'
import { GET_ALL_ITEMS } from '../queries/items'
import ItemsDroppableList from '../components/ItemsDroppableList'

class ItemsList extends Component {
  render() {
    return (
      <Fragment>
        <ItemsDroppableList {...this.props} />
      </Fragment>
    )
  }
}

export default withApollo(graphql(GET_ALL_ITEMS)(ItemsList))

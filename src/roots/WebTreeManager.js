import React, { Component } from 'react'
import AddNewWebTreeItem from '../components/AddNewWebTreeItem'
import WebTreeDroppableList from '../components/WebTreeDroppableList'
import { graphql, compose } from 'react-apollo'
import { GET_ALL_PAGES } from '../queries/pages'

if (typeof window !== 'undefined') {
  var placeholder = document.createElement('li')
  placeholder.className = 'Webtree-item Webtree-item--placeholder'
}

class WebTreeManager extends Component {
  render() {
    return (
      <div className="Webtree">
        <AddNewWebTreeItem />
        <WebTreeDroppableList {...this.props} />
      </div>
    )
  }
}

export default compose(
  graphql(GET_ALL_PAGES)
  // graphql(GET_ALL_ITEMS, { name: 'items' })
)(WebTreeManager)

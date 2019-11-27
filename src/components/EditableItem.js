import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { GET_ALL_ITEMS, DELETE_ITEM } from '../queries/items'
import EditableItemForm from './EditableItemForm'

class EditableItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    const { mutate } = this.props
    mutate({
      variables: {
        input: {
          id: this.props.id,
        },
      },
      refetchQueries: [{ query: GET_ALL_ITEMS }],
    })
      .then(res => {
        console.log({
          success: 'The item was deleted!',
        })
      })
      .catch(error => {})
  }

  render() {
    return (
      <div
        className={
          this.props.isEditable
            ? 'Editable-item'
            : 'Editable-item Editable-item--disable'
        }
      >
        <div className="Editable-item-index">{this.props.sort + 1}</div>
        <div className="Editable-item-content">
          {this.props.isEditable ? (
            <EditableItemForm {...this.props} />
          ) : (
            <span> {this.props.content}</span>
          )}
        </div>
        <div className="Editable-item-toolBar">
          <span onClick={this.props.setDraggableState}>Edit</span>
          <span onClick={this.handleDelete}>Delete</span>
        </div>
        {/* <Link className="Webtree-link" to={`/${this.props.id}`}>

          </Link> */}
      </div>
    )
  }
}

export default graphql(DELETE_ITEM)(EditableItem)

import React, { Component, Fragment } from 'react'
import EditableItem from '../components/EditableItem'
// ;<EditableItem name={item.name} id={item.id} />
if (typeof window !== 'undefined') {
  var placeholder = document.createElement('li')
  placeholder.className = 'Webtree-item Webtree-item--placeholder'
}

class DroppableItem extends Component {
  render() {
    return (
      <Fragment>
        <li
          className={
            !this.props.isEditable
              ? `${this.props.className}`
              : `${this.props.className} Droppable-item--disable`
          }
          data-id={this.props.dataId}
          draggable={this.props.isDraggable}
          onDragEnd={this.props.onDragEnd}
          onDragStart={this.props.onDragStart}
          onDragOver={this.props.onDragOver}
        >
          <EditableItem {...this.props} />
        </li>
      </Fragment>
    )
  }
}

export default DroppableItem

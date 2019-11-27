import React, { Component, Fragment } from 'react'
import { GET_ALL_ITEMS, UPDATE_ITEM } from '../queries/items'
import { graphql, withApollo } from 'react-apollo'
// import { useMutation } from '@apollo/react-hooks' À VOIR AVEC LES HOOKS

import DroppableItem from '../components/DroppableItem'
if (typeof window !== 'undefined') {
  var placeholder = document.createElement('li')
  placeholder.className = 'Droppable-item Droppable-item--placeholder'
}

class ItemsDroppableList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      draggableItems: [],
      isDraggable: true,
      isEditable: false,
    }
    this.onDragStart = this.onDragStart.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.setDraggableState = this.setDraggableState.bind(this)
  }

  componentDidMount() {
    this.setState({ draggableItems: this.props.data.allItems })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data)
      this.setState({ draggableItems: this.props.data.allItems })
  }
  onDragStart(id, name, e) {
    this.dragged = e.currentTarget
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', this.dragged)
  }
  onDragEnd(e) {
    let { draggableItems } = this.state
    this.dragged.style.display = 'block'
    document.querySelector('.Droppable-item--placeholder').remove()
    var from = Number(this.dragged.dataset.id)
    var to
    this.dragged.dataset.id < this.over.dataset.id
      ? (to = Number(this.over.dataset.id + 1))
      : (to = Number(this.over.dataset.id))
    if (from < to) to--
    draggableItems.splice(to, 0, draggableItems.splice(from, 1)[0])
    this.setState(
      {
        draggableItems: draggableItems,
      },
      () => {
        this.updateSortIndexes()
      }
    )
  }
  onDragOver(e) {
    e.preventDefault()
    if (e.target.className === 'Droppable-item--placeholder') return
    this.over = e.target
    console.log(this.over)
    this.dragged.dataset.id < this.over.dataset.id
      ? e.target.parentNode.insertBefore(placeholder, e.target.nextSibling)
      : e.target.parentNode.insertBefore(placeholder, e.target)
  }

  updateSortIndexes() {
    const { draggableItems } = this.state
    draggableItems.forEach((item, i) => {
      this.props
        .mutate({
          variables: {
            input: { id: item.id, name: item.name, sort: i },
          },
          refetchQueries: [{ query: GET_ALL_ITEMS }],
        })
        .then(res => {
          console.log({
            success: 'The item was updated!',
          })
        })
        .catch(error => {})
    })
  }

  setDraggableState() {
    this.state.isDraggable
      ? this.setState({ isDraggable: false, isEditable: true })
      : this.setState({ isDraggable: true, isEditable: false })
  }

  render() {
    const { draggableItems, isDraggable } = this.state
    return (
      <Fragment>
        {isDraggable ? (
          <h3>You're in draggable mode</h3>
        ) : (
          <h3>You're in editable mode</h3>
        )}
        <button onClick={this.updateSortIndexes.bind(this)}>UpdateList</button>

        <ul className="Droppable-list">
          {draggableItems &&
            draggableItems.map((item, i) => (
              <DroppableItem
                {...this.state}
                className="Droppable-item"
                key={item.id}
                id={item.id}
                content={item.name}
                dataId={i}
                sort={item.sort}
                onDragEnd={this.onDragEnd}
                onDragStart={e => this.onDragStart(item.id, item.name, e)}
                onDragOver={this.onDragOver}
                setDraggableState={this.setDraggableState}
              />
            ))}
        </ul>
      </Fragment>
    )
  }
}

export default withApollo(graphql(UPDATE_ITEM)(ItemsDroppableList))

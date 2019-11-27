import React, { Component, Fragment } from 'react'
import { graphql, withApollo } from 'react-apollo'
import { GET_ALL_ITEMS, UPDATE_ITEM } from '../queries/items'
import autosize from 'autosize'

class EditableItemForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      id: '',
      name: '',
    }
  }
  componentDidMount() {
    this.setState({ id: this.props.id, name: this.props.content })
    autosize(document.querySelectorAll('textarea'))
  }

  handleSubmit(e) {
    const { id, name } = this.state
    const { mutate } = this.props

    e.preventDefault()
    if (name === '') {
      console.log({ error: 'The item is empty !' })
      return
    }

    let data = this.props.client.readQuery({ query: GET_ALL_ITEMS })
    data.allItems.find(() => item => {
      if (item.id === id) item.name = name
    })
    this.props.client.writeData({ data })

    mutate({
      variables: {
        input: { id: id, name: name },
      },
      refetchQueries: [{ query: GET_ALL_ITEMS }],
    })
      .then(res => {
        console.log({
          success: 'The item was updated!',
        })
      })
      .catch(error => {})
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { name } = this.state
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea
              name="name"
              value={name}
              onChange={this.handleOnChange}
              className="form-control"
            />
          </div>
          <div>
            <input type="submit" value="Save changes" />
          </div>
        </form>
      </Fragment>
    )
  }
}

export default withApollo(graphql(UPDATE_ITEM)(EditableItemForm))

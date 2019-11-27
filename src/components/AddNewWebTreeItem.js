import React, { Component, Fragment } from 'react'
import { graphql } from 'react-apollo'
import { GET_ALL_PAGES, CREATE_PAGE } from '../queries/pages'
import autosize from 'autosize'

class AddNewWebTreeItem extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      name: '',
    }
  }
  componentDidMount() {
    autosize(document.querySelector('textarea'))
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    const { name } = this.state
    const { mutate } = this.props
    console.log(mutate)
    e.preventDefault()
    if (name === '') {
      console.log({ error: 'The page is empty !' })
      return
    }
    mutate({
      variables: {
        input: { name: name },
      },
      refetchQueries: [{ query: GET_ALL_PAGES }],
    })
      .then(res => {
        console.log({
          success: 'The page was created!',
        })
        this.setState({ name: '' })
      })
      .catch(error => {})
  }

  render() {
    const { name } = this.state
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Add new link.</h4>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Type new link"
            onChange={this.handleOnChange}
            className="form-control"
          />

          <input ref="input" type="submit" value="Save changes" />
        </form>
      </Fragment>
    )
  }
}

export default graphql(CREATE_PAGE)(AddNewWebTreeItem)

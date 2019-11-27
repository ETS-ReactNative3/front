import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { GET_ALL_ITEMS, CREATE_ITEM } from '../queries/items'
import Z from '../util/Z'
import autosize from 'autosize'

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.whereIsZalgo = this.whereIsZalgo.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      name: '',
      zalgo: false,
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

  whereIsZalgo() {
    const { zalgo } = this.state
    zalgo ? this.setState({ zalgo: false }) : this.setState({ zalgo: true })
  }

  handleSubmit(e) {
    const { name, zalgo } = this.state
    const { mutate } = this.props
    e.preventDefault()
    if (name === '') {
      console.log({ error: 'The item is empty !' })
      return
    }
    mutate({
      variables: {
        input: { name: zalgo ? Z.generate(this.state.name) : name },
      },
      refetchQueries: [{ query: GET_ALL_ITEMS }],
    })
      .then(res => {
        console.log({
          success: 'The item was created!',
        })
        this.setState({ name: '' })
      })
      .catch(error => {})
  }

  render() {
    const { name } = this.state
    return (
      <div>
        {/* <header>
          <span onClick={this.whereIsZalgo}>Zalgo</span>
        </header> */}
        <form onSubmit={this.handleSubmit}>
          : )
          <div>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Type something"
              onChange={this.handleOnChange}
              className="form-control"
            />
          </div>
          <div>
            <input ref="input" type="submit" value="Save changes" />
          </div>
        </form>
      </div>
    )
  }
}

export default graphql(CREATE_ITEM)(ItemForm)

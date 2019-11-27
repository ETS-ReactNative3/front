import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { logIn } from '../queries/users'

class LogInForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      email: '',
      password: '',
      isLogged: false,
      isOpened: false,
    }
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    const { email, password } = this.state
    const { mutate } = this.props
    e.preventDefault()
    mutate({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    }).then(res => {
      console.log(res.data)
      this.setState({ isLogged: !!res.data.logIn })
      sessionStorage.setItem('AUTH_TOKEN', res.data.logIn)
      if (this.state.isLogged)
        this.props.history.push(`/`)
    })
  }
  render() {
    const { email, password, isOpened } = this.state
    return (
      <div className={isOpened ? 'sign-up opened' : 'sign-up opened'}>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <label>Se connecter</label>
          <input
            autoComplete="on"
            name="email"
            value={email}
            placeholder="Adresse email"
            onChange={this.handleOnChange}
            className="form-control"
          />
          <input
            autoComplete="on"
            type="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            onChange={this.handleOnChange}
            className="form-control"
          />
          <input ref="input" type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}

export default compose(graphql(logIn))(LogInForm)

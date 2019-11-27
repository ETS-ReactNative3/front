import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { signUp } from '../queries/users'

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      formErrors: { email: '', password: '' },
    }
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  validateField(e) {
    e.preventDefault()
    let { email, password, formErrors } = this.state
    email = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    formErrors.email = email ? '' : ' is invalid'
    password = password.length >= 6
    formErrors.password = password ? '' : ' is too short'
    this.setState(
      {
        formErrors: formErrors,
        email: email,
        password: password,
      },
      this.handleSubmit()
    )
  }

  handleSubmit() {
    const { email, firstName, lastName, password } = this.state
    const { mutate } = this.props
    mutate({
      variables: {
        input: {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
        },
      },
    }).then(res => {
      console.log({
        success: 'User was created!',
      })
    })
  }
  render() {
    const { email, firstName, lastName, password, formErrors } = this.state
    console.log(formErrors)
    return (
      <form className="sign-up-form" onSubmit={this.validateField}>
        <label>Créer un compte</label>
        <input
          autoComplete="on"
          name="email"
          value={email}
          placeholder="Adresse email"
          onChange={this.handleOnChange}
          className="form-control"
        />
        <input
          autoComplete="off"
          name="firstName"
          value={firstName}
          placeholder="Prénom"
          onChange={this.handleOnChange}
          className="form-control"
        />
        <input
          autoComplete="off"
          name="lastName"
          value={lastName}
          placeholder="Nom"
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
        <input ref="input" type="submit" value="Save changes" />
      </form>
    )
  }
}

export default compose(graphql(signUp))(SignUpForm)

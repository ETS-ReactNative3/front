import React, { Component, Fragment } from 'react'
import { Router, Link } from 'react-router-dom'
import Routes from './router/Routes'
import LocaleSelect from './components/LocaleSelect'

// import logo from './logo.svg'
import './styles/App.css'
import { graphql } from 'react-apollo'
import { GET_ALL_PAGES } from './queries/pages'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { initDone: false }
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }
    return (
      <Fragment>
        {/* <img
          style={{ width: '150px' }}
          src={logo}
          className="App-logo"
          alt="logo"
        /> */}
        <LocaleSelect initDone={() => this.setState({ initDone: true })} />
        {this.state.initDone && (
          <Router history={history}>
            <div className="App-header">
              <Link className="App-header-link" to="/">
                Home
              </Link>
              <Link className="App-header-link" to="/login">
                LogIn
              </Link>
              <Link
                className="App-header-link"
                onClick={() => sessionStorage.removeItem('AUTH_TOKEN')}
                to="#"
              >
                Logout
              </Link>
              <Link className="App-header-link" to="/signup">
                Sign Up
              </Link>
              <Link className="App-header-link" to="/chat">
                ChatBox
              </Link>
              <Link className="App-header-link" to="/stripe">
                Stripe
              </Link>
              {this.props.data.allPages.map(page => (
                <Link
                  key={page.id}
                  className="App-header-link"
                  to={`/${page.id}`}
                >
                  {page.name}
                </Link>
              ))}
              <Link className="App-header-link" to="/admin">
                Admin
              </Link>
            </div>
            <Routes />
          </Router>
        )}
      </Fragment>
    )
  }
}

export default graphql(GET_ALL_PAGES)(App)

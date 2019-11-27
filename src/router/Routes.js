import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from '../roots/Home'
import SignUpForm from '../components/SignUpForm'
import LogInForm from '../components/LogInForm'
import WebTreeManager from '../roots/WebTreeManager'
import ChatBox from '../components/ChatBox'
import Stripe from '../components/Stripe'

import { graphql } from 'react-apollo'
import { GET_ALL_PAGES } from '../queries/pages'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Dashboard from '../roots/Dashboard'
import { Helmet } from 'react-helmet-async'

class Routes extends Component {
  render() {
    const authToken = sessionStorage.getItem('AUTH_TOKEN')

    return (
      <div className="View-content">
        <TransitionGroup>
          <CSSTransition
            timeout={{ enter: 500, exit: 0 }}
            classNames="fade"
            key={this.props.location.pathname}
          >
            <Switch location={this.props.location}>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LogInForm} />
              <Route path="/signup" exact component={SignUpForm} />
              <Route path="/chat" exact component={ChatBox} />
              <Route path="/stripe" exact component={Stripe} />
              {this.props.data.allPages.map(page => (
                <Route
                  key={page.id}
                  path={`/${page.id}`}
                  exact
                  component={null}
                >
                  <Helmet>
                    <title>{page.name}</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                  </Helmet>
                </Route>
              ))}
              <Route
                path="/admin"
                render={() =>
                  authToken ? (
                    <Dashboard />
                  ) : (
                    <LogInForm {...this.props} redirect="admin" />
                  )
                }
              />
              <Route
                path="/webtreemanager"
                render={() =>
                  authToken ? (
                    <WebTreeManager />
                  ) : (
                    <LogInForm {...this.props} redirect="webtreemanager" />
                  )
                }
              />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(graphql(GET_ALL_PAGES)(Routes))

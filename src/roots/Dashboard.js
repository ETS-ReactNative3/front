import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Link className="Admin-link" to={`/webtreemanager`}>
          Web tree's manager
        </Link>
      </Fragment>
    )
  }
}

export default Dashboard

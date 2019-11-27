import React, { Component, Fragment } from 'react'
import { withApollo } from 'react-apollo'

class Test extends Component {
  render() {
    console.log(this.props.client)

    return (
      <Fragment>
        <div>????</div>
      </Fragment>
    )
  }
}

export default withApollo(Test)

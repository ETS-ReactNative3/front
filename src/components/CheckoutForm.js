import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { testQuery } from '../queries/stripe'
import { withApollo } from 'react-apollo'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit(e) {
    let { token } = await this.props.stripe.createToken({ name: 'Name' })
    console.log(token)
    let response = await this.props.client.query({
      query: testQuery,
      variables: {
        input: {
          id: token.id,
          tokenId: '',
        },
      },
    })

    if (response.ok) console.log('Purchase Complete!')
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    )
  }
}

export default injectStripe(withApollo(CheckoutForm))

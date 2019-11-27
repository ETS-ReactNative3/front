import React, { Component, Fragment } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'

import CheckoutForm from '../components/CheckoutForm'

class Stripe extends Component {
  render() {
    return (
      <Fragment>
        <StripeProvider apiKey="pk_test_v3HV7qMBk0j9mF7W1gnRob0S">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </Fragment>
    )
  }
}

export default Stripe

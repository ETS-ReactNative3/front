import React, { Component, Fragment } from 'react'
import ItemsList from '../components/ItemsList'
import ItemForm from '../components/ItemForm'
import intl from 'react-intl-universal'
import { Helmet } from 'react-helmet-async'

// import CaptureHome from '../it/CaptureHome'
// import StarRatings from 'react-star-ratings'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { rating: 1 }
    this.changeRating = this.changeRating.bind(this)
  }
  changeRating(newRating, name) {
    this.setState({
      rating: newRating,
    })
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>@lias</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta name="geo.placename" content="Clichy, France" />
          <meta name="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta name="og:site_name" content="" />
        </Helmet>
        <h1>{intl.getHTML('home.title')}</h1>
        {intl.get('SALE_PRICE', { price: 123456.78 })}
        {/* <StarRatings
          rating={this.state.rating}
          starRatedColor="orange"
          starHoverColor="green"
          changeRating={this.changeRating}
          numberOfStars={6}
          name="rating"
        /> */}
        <ItemForm />
        <ItemsList />
        {/* <div style={{ position: 'relative' }}>
          <CaptureHome />
        </div> */}
      </Fragment>
    )
  }
}

export default Home

import React from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'react-snapshot'
import './styles/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { concat } from 'apollo-link'
import { RetryLink } from 'apollo-link-retry'
import { persistCache } from 'apollo-cache-persist'
// import { isDevelopment } from 'apollo-utilities'
import { HelmetProvider } from 'react-helmet-async'

// Set up your cache.
const cache = new InMemoryCache()

// Set up cache persistence.
const waitOnCache = persistCache({
  cache,
  storage: window.localStorage,
  debug: true,
})

const retry = new RetryLink({ attempts: { max: Infinity } })
console.log(process.env.NODE_ENV)
const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'https://graphqlserver1.herokuapp.com/',
})

const link = concat(retry, httpLink)

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
  },
  // query: {
  //   fetchPolicy: 'cache-and-network',
  // },
}

const client = new ApolloClient({
  link: link,
  cache,
  resolvers: {},
  defaultOptions,
  connectToDevTools: true,
})

waitOnCache.then(() => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <HelmetProvider>
        <App></App>
      </HelmetProvider>
    </ApolloProvider>,
    document.getElementById('root')
  )
  registerServiceWorker()
})

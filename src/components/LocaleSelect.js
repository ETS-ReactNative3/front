import React, { Component } from 'react'
import intl from 'react-intl-universal'

const locales = {
  'en-US': require('../locales/en-US.json'),
  'fr-FR': require('../locales/fr-FR.json'),
}

class LocaleSelect extends Component {
  constructor(props) {
    super(props)
    this.state = { initDone: false }
    this.onSelectLocale = this.onSelectLocale.bind(this)
  }

  componentDidMount() {
    this.loadLocales()
  }

  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      cookieLocaleKey: 'lang',
    })
    intl
      .init({
        currentLocale, // TODO: determine locale here
        locales,
      })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.props.initDone()
      })
  }

  onSelectLocale = e => {
    let lang = e.target.value
    window.location.search = `?lang=${lang}`
  }

  render() {
    return (
      <select
        className="Locales-select"
        onChange={this.onSelectLocale}
        defaultValue=""
      >
        <option value="" disabled>
          Change Language
        </option>
        {Object.keys(locales).map(locale => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    )
  }
}

export default LocaleSelect

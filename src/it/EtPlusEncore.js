import React, { Component } from 'react'
import './css/EtPlusEncore.css'

import fleche from './img/fleche@72.png'
import CaptureHomeOptionListDropDown from './CaptureHomeOptionListDropDown.js'

export default class EtPlusEncore extends Component {
  constructor(props) {
    super()
    this.state = {
      hide: true,
      data: [],
      scale: 1,
      windowWidth: 1200,
    }
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize(e) {
    let scale = 1
    document.body.clientWidth < 1200
      ? (scale = document.body.clientWidth / this.state.windowWidth)
      : (scale = 1)
    this.setState({
      scale: scale,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  _toogle() {
    this.state.hide
      ? this.setState({ hide: false })
      : this.setState({ hide: true })
  }

  _close() {
    this.setState({ hide: true })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    const data = [
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText:
          "Je teste gratuitement la plateforme pendant 30 jours, c'est sans engagement",
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText:
          'Je gère mes clients, mes devis et mes factures et je saisis manuellement mes factures fournisseurs',
      },
      {
        checks: [
          {
            first: '1',
            firstPlus: '3',
            open: '6',
          },
        ],
        innerText:
          'Je synchronise mes comptes bancaires pour suivre ma trésorerie',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText: 'Je gère ma TVA, du calcul à la déclaration',
      },
      {
        checks: [
          {
            first: '',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText: 'J’accède à l’Assistance téléphonique<sup>(2)</sup>',
      },
      {
        checks: [
          {
            first: '',
            firstPlus: '',
            open: '&#xf00c;',
          },
        ],
        innerText:
          'Je gère mes factures fournisseurs automatiquement et j’accède au back office de comptabilité',
      },
      {
        checks: [
          {
            first: '',
            firstPlus: '',
            open: '5',
          },
        ],
        innerText: 'Je gère plusieurs utilisateurs',
      },
      {
        checks: [
          {
            first: '',
            firstPlus: '',
            open: '',
          },
        ],
        innerText: '......................................',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText:
          'Accédez à EBP Horizon en mobilité depuis n’importe quel ordinateur ou tablette',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText: 'Donnez accès gratuitement à votre expert-comptable',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText: 'Organisez et gérez vos catalogues produits et services',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText:
          'Créez et envoyez des devis et factures à l’image de votre entreprise',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText:
          'Gérez vos clients, devis en cours, factures en attente et relancez-les au bon moment',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText: 'Saisissez manuellement vos factures fournisseurs',
      },
      {
        checks: [
          {
            first: '&#xf00c;',
            firstPlus: '&#xf00c;',
            open: '&#xf00c;',
          },
        ],
        innerText:
          'Suivez les indicateurs clés de votre activité et visualisez rapidement les tâches à accomplir',
      },
      {
        checks: [
          {
            first: '1',
            firstPlus: '3',
            open: '6',
          },
        ],
        innerText:
          'Suivez votre trésorerie en synchronisant vos comptes bancaires',
      },
      {
        checks: [
          {
            first: '&#xf0ad',
            firstPlus: '',
            open: '',
          },
        ],
        innerText: '',
      },
      {
        checks: [
          {
            first: '',
            firstPlus: '&#xf0ad',
            open: '',
          },
        ],
        innerText: '',
      },
      {
        checks: [
          {
            first: '',
            firstPlus: '',
            open: '&#xf0ad',
          },
        ],
        innerText: '',
      },
    ]

    this.setState({ data: [...this.state.data, ...data] })
  }

  render() {
    const { toggleCapture, alpha, items } = this.props
    const { data } = this.state
    if (document.body.clientWidth >= 600) {
      return (
        <div className="icons">
          <div
            className="optionsList__container"
            style={{ transform: `scale(${this.state.scale})` }}
          >
            <div className={!alpha ? 'hide optionsList' : 'optionsList'}>
              <div className="optionsList__heading clearfix">
                <span>Toutes nos options...</span>
                <button type="button" className="close" onClick={toggleCapture}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <ul className="optionsList__scrollable">
                <li className="force-overflow">
                  <ul className="optionsList__scrollable__headings">
                    <li className="optionsList__scrollable__heading">
                      <span>First</span>
                    </li>
                    <li className="optionsList__scrollable__heading">
                      <span>first+</span>
                    </li>
                    <li className="optionsList__scrollable__heading">
                      <span>Open</span>
                    </li>
                  </ul>
                  {data.map((item, index) => (
                    <ul key={index} className=" optionsList_option">
                      <li>
                        {item.checks.map((check, index) => (
                          <ul
                            key={index}
                            className="optionsList_option__ckecks"
                          >
                            <li className="optionsList_option__icon">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: check.first,
                                }}
                              ></span>
                            </li>
                            <li className="optionsList_option__icon">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: check.firstPlus,
                                }}
                              ></span>
                            </li>
                            <li className="optionsList_option__icon">
                              <span
                                dangerouslySetInnerHTML={{ __html: check.open }}
                              ></span>
                            </li>
                          </ul>
                        ))}
                      </li>
                      <li className="optionsList_option__content">
                        <ul
                          className="ripple-container"
                          style={{ position: 'relative', overflow: 'hidden' }}
                        >
                          <li style={{ padding: '.5rem', cursor: 'pointer' }}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.innerText,
                              }}
                            ></span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  ))}
                </li>
              </ul>
            </div>
          </div>

          <div className="icon master" onClick={toggleCapture}>
            <span
              style={{
                position: 'absolute',
                color: 'rgb(25, 63, 94)',
                left: 75,
                fontSize: '2rem',
                width: '230px',
                top: 10,
              }}
            >
              Et plus encore...
            </span>
            <span className="label">Et plus encore...</span>
            <span className="button">&#xf067;</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="icons">
          <div className="optionsList__container">
            <CaptureHomeOptionListDropDown {...this.props} />
          </div>
          <div className="icon master" onClick={toggleCapture}>
            <span
              style={{
                position: 'absolute',
                color: 'rgb(25, 63, 94)',
                left: 75,
                fontSize: '2rem',
                width: '230px',
                top: 10,
              }}
            >
              Et plus encore...
            </span>
            <span className="label">Et plus encore...</span>
            <span className="button">&#xf067;</span>
          </div>
        </div>
      )
    }
  }
}

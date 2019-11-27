import React, { Component } from 'react'
import WindowCapture from './WindowCapture.js'
import ImageLegends from './ImageLegends.js'
import ReactDOM from 'react-dom'
import fleche1 from './img/fleche1@72.png'
import fleche2 from './img/fleche2@72.png'
import fleche3 from './img/fleche3@72.png'
import fleche4 from './img/fleche4@72.png'
import fleche5 from './img/fleche5@72.png'
import EtPlusEncore from './EtPlusEncore.js'

import hector from './img/hector-head.png'
import CA from './img/CA.jpg'

export default class LegendsContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      x: 0,
      y: 0,
      items: [],
      alpha: false,
    }
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY })
  }
  componentDidMount() {
    const data = [
      {
        className: 'OpEnCours',
        innerText:
          'Consulter vos opérations<br/> en cours: devis, factures, etc.',
        coefX: -0.05,
        coefY: 0.05,
        src: fleche1,
        window: [
          {
            heading: 'Op en cours',
            container: [
              {
                button: '&#xf067',
                label: 'Alo Hector ?',
              },
            ],
            icon: [
              {
                button: '&#xf067',
                label: 'opérations en cours',
              },
            ],
          },
        ],
      },
      {
        className: 'Vue360',
        innerText: 'Bénéficiez d’une vue à 360°<br/> de votre activité',
        coefX: 0.02,
        coefY: 0.02,
        src: fleche2,
        window: [
          {
            heading: 'Vue à 360°',
            container: [
              {
                iframe:
                  'https://static.ebp.com/horizon/capture_anim/mon_activite.html',
              },
            ],
            icon: [
              {
                button: '&#xf067',
                label: 'Vue à 360°',
              },
            ],
          },
        ],
      },
      {
        className: 'Synchro',
        innerText: 'Synchronisez vos<br/>comptes bancaires',
        coefX: 0.05,
        coefY: 0.05,
        src: fleche3,
        window: [
          {
            heading: 'Synchro bancaires',
            container: [
              {
                button: '&#xf067',
                label: 'Alo Hector ?',
              },
            ],
            icon: [
              {
                button: '&#xf067',
                label: 'Synchro bancaires',
              },
            ],
          },
        ],
      },
      {
        className: 'AloHector',
        innerText: 'Profitez d’un<br/>assistant virtuel',
        coefX: 0.01,
        coefY: 0.02,
        src: fleche4,
        window: [
          {
            heading: "Besoin d'aide",
            container: [
              {
                hector: hector,
              },
            ],
            icon: [
              {
                button: '&#xf067',
                label: 'Alo Hector ?',
              },
            ],
          },
        ],
      },
      {
        className: 'CA',
        innerText: 'Suivez l’évolution<br/> de votre chiffre d’affaires',
        coefX: 0.01,
        coefY: 0.01,
        src: fleche5,
        window: [
          {
            heading: 'Lorem',
            container: [
              {
                CA: CA,
                domElements:
                  '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>',
              },
            ],
            icon: [
              {
                button: '&#xf067',
                label: 'Votre CA...',
              },
            ],
          },
        ],
      },
    ]
    this.setState({ items: [...this.state.items, ...data] })
  }

  toggleCapture() {
    this.state.alpha
      ? this.setState({ alpha: false })
      : this.setState({ alpha: true })
  }
  render() {
    const { x, y, items, alpha } = this.state
    if (document.body.clientWidth >= 600) {
      return (
        <div
          className="capture__home__container"
          onMouseMove={this._onMouseMove.bind(this)}
        >
          <figure
            style={{ margin: '2rem 2rem 13rem' }}
            className="capture__home"
          >
            <div
              className={
                this.state.alpha
                  ? 'hide capture__home__content'
                  : 'capture__home__content'
              }
            >
              <figcaption>
                <ImageLegends {...this.state} />
              </figcaption>
            </div>
            <EtPlusEncore
              {...this.state}
              toggleCapture={this.toggleCapture.bind(this)}
            />
          </figure>
        </div>
      )
    } else {
      return (
        <div
          className="capture__home__container_responsive"
          onMouseMove={this._onMouseMove.bind(this)}
        >
          {/* <EtPlusEncore
            {...this.state}
            toggleCapture={this.toggleCapture.bind(this)}
          /> */}
        </div>
      )
    }
  }
}

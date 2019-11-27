import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WindowCapture from './WindowCapture.js'

export default class ImageLegend extends Component {
  constructor(props) {
    super()
    this.state = {
      windowWidth: 1000,
      fontSize: 1,
      scale: 1.117,
    }
    this.handleResize = this.handleResize.bind(this)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  componentDidMount() {
    console.log(this.props.focused)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  handleResize(e) {
    if (document.body.clientWidth > 1200) return
    let scale = document.body.clientWidth / this.state.windowWidth
    let fontSize = this.state.windowWidth / document.body.clientWidth

    this.setState({
      scale: scale,
      fontSize: fontSize,
    })
  }
  render() {
    const { x, y } = this.props
    const {
      coefX,
      coefY,
      innerText,
      src,
      window,
      handleFocused,
      focused,
      _setAlpha,
    } = { ...this.props }
    return (
      <li
        className={focused ? 'focused' : ''}
        style={
          focused || focused === null
            ? {
                transform: `scale(${this.state.scale}) translate3d(${x *
                  coefX}px, ${-y * coefY}px, 0)`,
              }
            : {
                opacity: 0.3,
                transform: `scale(${this.state.scale}) translate3d(${x *
                  coefX}px, ${-y * coefY}px, 0)`,
              }
        }
      >
        <div
          className="invisible__btn"
          onClick={handleFocused}
          style={{
            position: 'absolute',
            width: '100%',
            background: 'rgba(0,0,0,0)',
            overflow: 'hidden',
            zIndex: 100,
            top: -15,
            bottom: -15,
            cursor: 'pointer',
          }}
        ></div>
        <span
          style={{ transform: `scale(${this.state.fontSize})` }}
          dangerouslySetInnerHTML={{ __html: innerText }}
        ></span>
        <WindowCapture {...this.props} />
        <img className="arrow" alt="" src={src} />
      </li>
    )
  }
}

//  ref={}

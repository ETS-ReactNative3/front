import React, { Component } from 'react'
import WindowCapture from './WindowCapture.js'
import ImageLegend from './ImageLegend.js'
import ReactDOM from 'react-dom'
import capture from './img/Visuel-Horizon_Appvizer-1017.png'

export default class ImageLegends extends Component {
  constructor(props) {
    super()
    this.state = {
      focused: null,
    }
  }
  handleFocused(i) {
    if (i === this.state.focused) {
      this.setState({ focused: null })
    } else {
      this.setState({ focused: i })
    }
  }

  render() {
    const { x, y, items } = this.props
    return (
      <div>
        <ul className="img__legend">
          {!!items
            ? items.map((item, index) => (
                <ImageLegend
                  style={{ background: 'red' }}
                  key={index}
                  {...item}
                  {...this.props}
                  {...this.state}
                  focused={
                    this.state.focused === null
                      ? null
                      : index === this.state.focused
                  }
                  handleFocused={this.handleFocused.bind(this, index)}
                />
              ))
            : null}
        </ul>
        <div className={this.state.focused ? 'capture hide' : 'capture'}>
          <img alt="" src={capture} />
        </div>
      </div>
    )
  }
}

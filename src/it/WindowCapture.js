import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './css/WindowCapture.css'

export default class WindowCapture extends Component {
  constructor(props) {
    super()
  }
  render() {
    const {
      window,
      className,
      handleClick,
      focused,
      handleFocused,
    } = this.props
    return (
      <div>
        {!!window
          ? window.map((item, index) => {
              return (
                <div className={`WindowCapture ${className}`} key={index}>
                  <div
                    className={
                      focused
                        ? 'WindowCapture__container open'
                        : 'WindowCapture__container'
                    }
                  >
                    <div className="WindowCapture__heading clearfix">
                      <button
                        type="button"
                        className="close"
                        onClick={handleFocused}
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <span>{item.heading}</span>
                    </div>
                    <div className="WindowCapture__body">
                      {item.container.map((item, index) => {
                        const { hector, CA, iframe, domElements } = { ...item }
                        if (!!hector) {
                          return (
                            <div key={index}>
                              <div style={{ display: 'flex', margin: '1rem' }}>
                                <img
                                  style={{
                                    position: 'relative',
                                    left: 'auto',
                                    top: 'auto',
                                    marginRight: '.5rem',
                                  }}
                                  alt=""
                                  src={item.hector}
                                />
                                <div
                                  style={{
                                    flex: 1,
                                    textAlign: 'left',
                                    padding: '.5rem',
                                    fontSize: '10px',
                                    boxShadow:
                                      '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                                    background:
                                      'linear-gradient(to bottom, #efefef 0, #efefef 100%)',
                                  }}
                                >
                                  Bonjour,
                                  <br /> moi c’est Hector
                                </div>
                              </div>
                            </div>
                          )
                        }
                        if (!!CA) {
                          return (
                            <div key={index}>
                              <img
                                style={{
                                  position: 'relative',
                                  left: 'auto',
                                  top: 'auto',
                                  marginRight: '.5rem',
                                }}
                                src={item.CA}
                              />
                              <div
                                className="diagram"
                                dangerouslySetInnerHTML={{
                                  __html: item.domElements,
                                }}
                              />
                            </div>
                          )
                        }
                        if (!!iframe) {
                          return (
                            <div key={index}>
                              <iframe src={item.iframe}></iframe>
                            </div>
                          )
                        }
                      })}
                    </div>
                  </div>
                  <div>
                    {item.icon.map((item, index) => {
                      return (
                        <div key={index} className="icon little">
                          <span className="label" style={{ width: 'auto' }}>
                            {item.label}
                          </span>
                          <span
                            className="button"
                            dangerouslySetInnerHTML={{ __html: item.button }}
                          ></span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

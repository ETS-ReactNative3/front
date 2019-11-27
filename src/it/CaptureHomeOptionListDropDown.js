import React, { Component } from 'react';


export default class CaptureHomeOptionListDropDown extends Component {
  render() {
    const {items} = this.props
    return (
    	<div>
      {items.map((item, index)=>(
        <div key={index} >
          <div className="icon">
            <div className="capture__home_label" dangerouslySetInnerHTML={{__html: item.innerText}}></div>
            <span className='button'>&#xf067;</span>
          </div>
          <div className="optionsList__container_dropdown">
            {item.window.map((window, index)=>(
              <div key={index}>
                {window.container.map((_this, index)=>{
                    if(!!_this.CA){
                      return(
                        <div>
                          <img alt="" src={_this.CA}/>
                          {_this.domElements}
                        </div>
                      )
                    }
                  }

                )}
              </div>
              )
            )}
          </div>
        </div>
      ))}
    	</div>
    )
  }
}

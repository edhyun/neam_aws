import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    const { onBodyUpdate } = this.props
    const defaultString = "add text here"
    
    return (
      <div>
        <p contentEditable="true" onKeyUp={(e)=>{onBodyUpdate(e.target.innerHTML)}}>{defaultString}</p>
      </div>
    )
  }
}
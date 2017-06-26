import React, { Component } from 'react'

export default class ContainerToolbar extends Component {
  render() {
    const {
      contains,
      emptyContainer,
      deleteContainer,
      toggleEditPanel,
      size,
      incrementWidth,
      decrementWidth
    } = this.props

    return (
      <div className="container-toolbar">
        <span className="width-control">
          <span className="glyphicon glyphicon-chevron-left" onClick={() => decrementWidth()}></span>
          {size}
          <span className="glyphicon glyphicon-chevron-right" onClick={() => incrementWidth()}></span>
        </span>
        {contains ? contains.name : "empty"}
        <span className="delete glyphicon glyphicon-remove" onClick={() => deleteContainer()}></span>
        <span className="empty glyphicon glyphicon-trash" onClick={() => emptyContainer()}></span>
        <span className="edit glyphicon glyphicon-info-sign" onClick={() => toggleEditPanel()}></span>
      </div>
    )
  }
}
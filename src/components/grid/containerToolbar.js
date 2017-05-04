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
        {contains ? contains.name : "container default"}
        <span className="delete" onClick={() => deleteContainer()}>[x]</span>
        <span className="edit" onClick={() => toggleEditPanel()}>[edit]</span>
        <span className="empty" onClick={() => emptyContainer()}>[empty]</span>
      </div>
    )
  }
}
import React, { Component } from 'react'

export default class PublishedContainer extends Component {
  render() {
    const { size, contains } = this.props
    const classNameValue = `col-sm-${size}`
    return (
      <div className={classNameValue}>
        {contains ? contains.body : null}
      </div>
    )
  }
}
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

const compSource = {
  beginDrag(props) {
    return {
      name: props.name,
      type: props.type
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Comp extends Component {
  render() {
    const { type, name, isDropped, isDragging, connectDragSource } = this.props

    return connectDragSource(
      <li className="comp list-group-item">{type} - {name}</li>
    )
  }
}

export default DragSource('comp', compSource, collect)(Comp)
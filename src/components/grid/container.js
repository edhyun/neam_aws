import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import Empty from './contents/empty'
import Text from './contents/text'
import ContainerToolbar from './containerToolbar'
import EditPanel from './editPanel'

const style = {
  height: '12rem',
  color: 'black',
  textAlign: 'center',
  fontSize: '1.2rem',
  lineHeight: 'normal',
  border: '1px dashed #333'
};

const containerTarget = {
  canDrop(props) {
    return true
  },

  drop(props, monitor){
    props.onDrop(monitor.getItem())
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

// containers also needs to be sortable by dnd
class Container extends Component {  
  render() {
    const {
      connectDropTarget,
      isOver,
      canDrop,
      contains,
      size,
      isOpenEditPanel,
      onBodyUpdate
    } = this.props

    const isActive = isOver && canDrop;

    let sizeClassName = "n-container col-sm-" + size
    let backgroundColor = '#fff';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    let content
    if (!contains) {
      content = <Empty />
    } else if (contains.type === "text") {
      content = <Text onBodyUpdate={onBodyUpdate} />
    }

    return connectDropTarget(
      <div className={sizeClassName}>
        <ContainerToolbar {...this.props} />
        {isOpenEditPanel ? <EditPanel /> : null}
        <div className="containerBody" style={{ ...style, backgroundColor }}>
          {content}
        </div>
      </div>
    )
  }
}

export default DropTarget('comp', containerTarget, collect)(Container)
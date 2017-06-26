import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Container from './container'
import FloatingPanel from './floatingPanel'
import PublishedContainer from './publishedContainer'
import Editor from './editor'

import * as containerActions from '../../actions/container'
import * as firebaseActions from '../../actions/firebase'
import * as publishActions from '../../actions/publish'

class Grid extends Component {
  render() {
    const { containers, previewMode } = this.props
    const { 
      addContainer, 
      emptyContainer, 
      deleteContainer, 
      toggleEditPanel, 
      incrementWidth, 
      decrementWidth,
      onBodyUpdate
    } = this.props.bindContainerActions

    return previewMode ? (
      <div> 
        <button className="btn btn-default" onClick={() => this.previewModeOff()}>Back to edit</button>
        <button className="btn btn-default">Publish</button>
        <div className="row">
        {containers.map((container, idx) => 
          <PublishedContainer key={idx} size={container.size} contains={container.contains} />
          )}
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-default" onClick={() => this.saveContainers()}>Save for later</button>
            <button className="btn btn-default" onClick={() => this.previewModeOn()}>Preview</button>
          </div>
          <div className="col-xs-12">
            <FloatingPanel />
          </div>
          <div className="col-sm-6 bodyContent">
            {containers.map((container, idx) => 
              <Container key={idx}
                size={container.size}
                onDrop={(item) => this.handleDrop(idx, item)}
                contains={container.contains}
                isOpenEditPanel={container.isOpenEditPanel}
                emptyContainer={emptyContainer.bind(this, idx)}
                deleteContainer={deleteContainer.bind(this, idx)}
                toggleEditPanel={toggleEditPanel.bind(this, idx)}
                incrementWidth={incrementWidth.bind(this, idx)}
                decrementWidth={decrementWidth.bind(this, idx)}
                onBodyUpdate={onBodyUpdate.bind(this, idx)}
              />
            )}
            <div className="col-xs-12">
              <button className="btn btn-primary" onClick={() => addContainer()}>Add New Conainer</button>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="textField">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleDrop(idx, item) {
    console.log('just dropped!', idx, item, this.props.containers)

    this.props.bindContainerActions.dropped(item, idx)
    /*
    if (!hasEmptyContainer(this.props.containers)) {
      this.props.bindContainerActions.addContainer()
    }

    function hasEmptyContainer(containers) {
      return containers.some(container => container.contains === null)
    }
    */
  }

  saveContainers() {
    this.props.bindFirebaseActions.saveItem(this.props.containers)
  }

  previewModeOn() {
    this.props.bindPublishActions.previewModeOn()
  }

  previewModeOff() {
    this.props.bindPublishActions.previewModeOff()
  }
}

const wrappedGrid = DragDropContext(HTML5Backend)(Grid)

function mapStateToProps(state, props){
  return {
    containers: state.containers,
    previewMode: state.publish.previewMode
  }
}

function mapDispatchToProps(dispatch){
  return {
    bindContainerActions: bindActionCreators(containerActions, dispatch),
    bindFirebaseActions: bindActionCreators(firebaseActions, dispatch),
    bindPublishActions: bindActionCreators(publishActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wrappedGrid)
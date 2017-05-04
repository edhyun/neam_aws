import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Toolbar extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const itemList = this.props.item.map((item, idx) => {
      return <li key={idx}>{item.timestamp}</li>
    })
    return (
      <div className="toolbar-item">
        {itemList}
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    item: state.item
  }
}

function mapDispatchToProps(dispatch){
  return {
    //action: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
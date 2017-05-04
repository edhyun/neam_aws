import React, { Component } from 'react'
import Comp from './comp'

class FloatingPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      components: [
        { name: 1, type: 'text', content: null},
        { name: 2, type: 'text', content: null },
        { name: 3, type: 'image', content: null }
      ],
      droppedBoxNames: []
    }
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1
  }

  render() {
    const { components } = this.state

    return (
      <ul className="list-group">
        {components.map((component, idx) => 
          <Comp key={idx}
            type={component.type}
            name={component.name}
            isDropped={this.isDropped(component.name)}
          />
        )}
      </ul>
    )
  }
}

export default FloatingPanel
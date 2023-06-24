import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  render() {
    return (
      <div>
        pure components {this.props.name}
        
      </div>
    )
  }
}

export default PureComp

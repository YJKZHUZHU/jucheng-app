import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionUI from './ActionUI';


// mapStateToProps 输入

// mapDispatchToProps 输出

class Action extends Component {
  render() {
    return(
      <ActionUI></ActionUI>
    )
  }


  componentDidMount() {

  }
}


const mapStateToProps = ({ Action }) => {
  return {
    // address:"深圳"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Action);

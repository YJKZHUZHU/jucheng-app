import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeUI from './HomeUI';
import axios from 'axios';

// mapStateToProps 输入

// mapDispatchToProps 输出

class Home extends Component {
  render() {
    return(
      <HomeUI></HomeUI>
    )
  }


  componentDidMount() {

  }
}


const mapStateToProps = ({ Home }) => {
  return {
    // address:"深圳"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

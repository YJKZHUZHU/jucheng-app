import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderUI from './HeaderUI';
import store from '../../store/index'
import { getAddress } from './store/actionCreators';


// mapStateToProps 输入

// mapDispatchToProps 输出

class Header extends Component {
  render() {
    return(
      <HeaderUI {...this.props}></HeaderUI>
    )
  }

  componentDidMount() {
    // console.log(123);
    store.dispatch(getAddress());
  }

}

const mapStateToProps = ({ Header }) => {
  // console.log(Header)
  return {
    address:Header.address,
    city_id:Header.city_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getList: dispatch(getAddress())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

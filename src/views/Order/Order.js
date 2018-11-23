import { connect } from 'react-redux'
import OrderUI from './OrderUI'
import React, { Component } from 'react'
import store from '../../store/index'
import { Toast } from 'antd-mobile';
// import { get } from './store/actionCreators';
class Tour extends Component {
  render() {
    return (
      <OrderUI {...this.props}></OrderUI>
    );
  }
  componentDidMount() {
    // store.dispatch(get());
  }
}
const mapStateToProps = (state) => {
  return {
    a: state.Tour.list
  }
}
const mapDispatchProps = (dispatch, getstate) => {
  return {
    submit: () => {
      Toast.success('提交成功', 1);
    }
  }
}
export default connect(mapStateToProps, mapDispatchProps)(Tour)


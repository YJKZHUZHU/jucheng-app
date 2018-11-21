import { connect } from 'react-redux'
import TourUI from './TourUI'
import React, { Component } from 'react'
import store from '../../store/index'
import { get } from './store/actionCreators';
class Tour extends Component {
  render() {
    return (
      <TourUI {...this.props}></TourUI>
    );
  }
  componentDidMount() {
    store.dispatch(get());
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.Tour.title,
    home: state.Tour.home,
    my: state.Tour.my,
    more: state.Tour.more,
    pageIndex: state.Tour.pageIndex,
    list: state.Tour.list
  }
}
const mapDispatchProps = (dispatch, getstate) => {
  return {
    show: (e) => {
      var divtemp = document.getElementById('aaa');
      var divt = window.getComputedStyle(divtemp).getPropertyValue("display");
      console.log(divt)
      if (divt == "none") {
        divtemp.style.display = "block";
      } else {
        divtemp.style.display = "none";
      }
      dispatch({
        type: 'SHOW_BOX'
      })

    },
    get: () => {
      dispatch(get())
    }
  }
}
export default connect(mapStateToProps, mapDispatchProps)(Tour)


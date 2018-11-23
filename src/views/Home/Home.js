import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeUI from './HomeUI';
import store from '../../store/index'
import { getBannerList,getShowList,getHotList,change } from './store/actionCreators';

// mapStateToProps 输入

// mapDispatchToProps 输出

class Home extends Component {
  render() {
    return(
      <HomeUI {...this.props}></HomeUI>
    )
  }
 
  componentDidMount() {
    store.dispatch(getBannerList());
    store.dispatch(getShowList());
    store.dispatch(getHotList(Home.city_id));
  }
}


const mapStateToProps = ({ Home }) => {
  return {
    bannerList:Home.bannerList,
    imgHeight:Home.imgHeight,
    tagList:Home.tagList,
    areaList:Home.areaList,
    showList:Home.showList,
    hotList:Home.hotList,
    city_id:Headers.city_id,
    changeClass:Home.changeClass
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      // Home.changeClass = !Home.changeClass;
      dispatch({
        type: 'CHANGECLASS'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

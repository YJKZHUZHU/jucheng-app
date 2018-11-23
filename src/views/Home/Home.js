import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import HomeUI from './HomeUI';
import store from '../../store/index'
import { getBannerList,getShowList,getHotList } from './store/actionCreators';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// mapStateToProps 输入

// mapDispatchToProps 输出

class Home extends Component {
  render() {
    return(
      <Fragment>
        <Header></Header>
        <HomeUI {...this.props}></HomeUI>
        <Footer></Footer>
      </Fragment>
    )
  }
 
  componentDidMount() {
    store.dispatch(getBannerList());
    store.dispatch(getShowList());
    store.dispatch(getHotList(Home.city_id));
  }
}


const mapStateToProps = (state) => {
  return {
    bannerList:state.Home.bannerList,
    imgHeight:state.Home.imgHeight,
    tagList:state.Home.tagList,
    areaList:state.Home.areaList,
    showList:state.Home.showList,
    hotList:state.Home.hotList,
    city_id:state.Header.city_id,
    changeClass:state.Home.changeClass
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: 'CHANGECLASS'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

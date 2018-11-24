import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import LocationUI from './LocationUI';
import { getCityList} from './store/actionCreators';


  class Location extends Component {
    render() {
      return(
        <Fragment>
          <LocationUI {...this.props}></LocationUI>
        </Fragment>
      )
    }
   
    componentDidMount() {
      store.dispatch(getCityList());
    }
  }

  const mapStateToProps = ( state ) => {
    return {
        cityListA: state.Location.cityListA,
        cityListB: state.Location.cityListB,
        cityListC: state.Location.cityListC,
        cityListD: state.Location.cityListD,
        cityListE: state.Location.cityListE,
        cityListF: state.Location.cityListF,
        cityListG: state.Location.cityListG,
        cityListH: state.Location.cityListH,
        cityListJ: state.Location.cityListJ,
        cityListK: state.Location.cityListK,
        cityListL: state.Location.cityListL,
        cityListM: state.Location.cityListM,
        cityListN: state.Location.cityListN,
        cityListP: state.Location.cityListP,
        cityListQ: state.Location.cityListQ,
        cityListR: state.Location.cityListR,
        cityListS: state.Location.cityListS,
        cityListT: state.Location.cityListT,
        cityListW: state.Location.cityListW,
        cityListX: state.Location.cityListX,
        cityListY: state.Location.cityListY,
        cityListZ: state.Location.cityListZ,
        nowCity: state.Header.address
      }
  }

  const mapDispatchToProps = (dispatch) => {
    return {

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Location);


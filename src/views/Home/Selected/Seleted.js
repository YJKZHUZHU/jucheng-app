import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
class Seleted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityListA: [],
      cityListB: [],
      cityListC: [],
      cityListD: [],
      cityListE: [],
      cityListF: [],
      cityListG: [],
      cityListH: [],
      cityListJ: [],
      cityListK: [],
      cityListL: [],
      cityListM: [],
      cityListN: [],
      cityListP: [],
      cityListQ: [],
      cityListR: [],
      cityListS: [],
      cityListT: [],
      cityListW: [],
      cityListX: [],
      cityListY: [],
      cityListZ: []
    };
  }
  componentWillMount() {
    const api = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(api + 'https://m.juooo.com/Index/getCityList').then((result) => {
      const cityListA = result.data.city_list.A.lists
      const cityListB = result.data.city_list.B.lists
      const cityListC = result.data.city_list.C.lists
      const cityListD = result.data.city_list.D.lists
      const cityListE = result.data.city_list.E.lists
      const cityListF = result.data.city_list.F.lists
      const cityListG = result.data.city_list.G.lists
      const cityListH = result.data.city_list.H.lists
      const cityListJ = result.data.city_list.J.lists
      const cityListK = result.data.city_list.K.lists
      const cityListL = result.data.city_list.L.lists
      const cityListM = result.data.city_list.M.lists
      const cityListN = result.data.city_list.N.lists
      const cityListP = result.data.city_list.P.lists
      const cityListQ = result.data.city_list.Q.lists
      const cityListR = result.data.city_list.R.lists
      const cityListS = result.data.city_list.S.lists
      const cityListT = result.data.city_list.T.lists
      const cityListW = result.data.city_list.W.lists
      const cityListX = result.data.city_list.X.lists
      const cityListY = result.data.city_list.Y.lists
      const cityListZ = result.data.city_list.Z.lists
      console.log(cityListB)
      // console.log(cityList.A.id)
      this.setState({
        cityListA,
        cityListB,
        cityListC,
        cityListD,
        cityListE,
        cityListF,
        cityListG,
        cityListH,
        cityListJ,
        cityListK,
        cityListL,
        cityListM,
        cityListN,
        cityListP,
        cityListQ,
        cityListR,
        cityListS,
        cityListT,
        cityListW,
        cityListX,
        cityListY,
        cityListZ
      })
    })
  }
  render() {
    return (
      <div className='f2'>
        <div className="flex-navbar">
          <a href="javascript:history.go(-1)" className="left">
            <span className="iconfont icon-jiantou2"></span>
          </a>
          <div className="center">切换城市</div>
        </div>
        <div className="select-area js-select-area pt88">
          <p className="area-title">当前城市</p>
          <div className="area-wrap">
            <a href="javascript:void(0);" className="area-items">北京</a>
          </div>
          <p className="area-title js-location">定位城市</p>
          <div className="area-wrap js-location-city">
            <a href="javascript:void(0);" className="area-items js-auto-city dis">定位失败，点击重试<span className="iconfont icon-zhongxinjiazai"></span></a>
          </div>
          <p className="area-title js-hot">热门城市</p>
          <div className="area-wrap">
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="0" name="全国" iscity="1" abbr="">全国</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="1" name="深圳" iscity="0" abbr="SZ">深圳</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="3" name="广州" iscity="0" abbr="GZ">广州</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="5" name="北京" iscity="0" abbr="BJ">北京</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="4" name="上海" iscity="0" abbr="SH">上海</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="6" name="成都" iscity="0" abbr="CD">成都</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="12" name="重庆" iscity="0" abbr="CQ">重庆</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="17" name="武汉" iscity="0" abbr="WH">武汉</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="14" name="长沙" iscity="0" abbr="CS">长沙</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="54" name="南京" iscity="0" abbr="NJ">南京</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="36" name="石家庄" iscity="0" abbr="SJZ">石家庄</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="10007" name="无锡" iscity="0" abbr="WX">无锡</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="41" name="宁波" iscity="0" abbr="NB">宁波</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="52" name="昆明" iscity="0" abbr="KM">昆明</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="51" name="西安" iscity="0" abbr="XA">西安</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="25" name="苏州" iscity="1" abbr="SZS">苏州</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="10019" name="东莞" iscity="1" abbr="DG">东莞</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="63" name="厦门" iscity="1" abbr="XM">厦门</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="62" name="泉州" iscity="1" abbr="QZ">泉州</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="11" name="杭州" iscity="0" abbr="HZ">杭州</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="53" name="澳门" iscity="0" abbr="AM">澳门</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="39" name="连云港" iscity="1" abbr="LYG">连云港</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="15" name="香港" iscity="0" abbr="XG">香港</a>
            <a href="javascript:void(0);" className="area-items js-hot-city-list" cid="10073" name="宜昌" iscity="1" abbr="YIC">宜昌</a>
          </div>
          <p className="area-title pt40 pb20 all-citylist">全部城市</p>
          <div className="area-lists js-area-lists js-all-city-list">
            <a href="javascript:void(0);" className="area-Cap" name="A">A</a>
            <div className="cap-list">
              {this.state.cityListA.map((v,k)=>{
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="B">B</a>
            <div className="cap-list">
              {this.state.cityListB.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="C">C</a>
            <div className="cap-list">
              {this.state.cityListC.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="D">D</a>
            <div className="cap-list">
              {this.state.cityListD.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="E">E</a>
            <div className="cap-list">
              {this.state.cityListE.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="F">F</a>
            <div className="cap-list">
              {this.state.cityListF.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="G">G</a>
            <div className="cap-list">
              {this.state.cityListG.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="H">H</a>
            <div className="cap-list">
              {this.state.cityListH.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="J">J</a>
            <div className="cap-list">
              {this.state.cityListJ.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="K">K</a>
            <div className="cap-list">
              {this.state.cityListK.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="L">L</a>
            <div className="cap-list">
              {this.state.cityListL.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="M">M</a>
            <div className="cap-list">
              {this.state.cityListM.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="N">N</a>
            <div className="cap-list">
              {this.state.cityListN.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="P">P</a>
            <div className="cap-list">
              {this.state.cityListP.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="Q">Q</a>
            <div className="cap-list">
              {this.state.cityListQ.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="R">R</a>
            <div className="cap-list">
              {this.state.cityListR.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="S">S</a>
            <div className="cap-list">
              {this.state.cityListS.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="T">T</a>
            <div className="cap-list">
              {this.state.cityListT.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="W">W</a>
            <div className="cap-list">
              {this.state.cityListW.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="X">X</a>
            <div className="cap-list">
              {this.state.cityListX.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="Y">Y</a>
            <div className="cap-list">
              {this.state.cityListY.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="Z">Z</a>
            <div className="cap-list">
              {this.state.cityListZ.map((v, k) => {
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid={v.id} name={v.name} iscity={v.is_city} abbr={v.Abbreviation} data-id={v.id} key={k}>{v.name}</a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="city-index js-city-index">
          <a href="javascript:void(0);" data-id="-1" className="index-items">当前</a>
          <a href="javascript:void(0);" data-id="-11" className="index-items">定位</a>
          <a href="javascript:void(0);" data-id="-111" className="index-items">热门</a>
          <a href="javascript:void(0);" className="index-items" data-id="A">A</a><a href="javascript:void(0);" className="index-items" data-id="B">B</a><a href="javascript:void(0);" className="index-items" data-id="C">C</a><a href="javascript:void(0);" className="index-items" data-id="D">D</a><a href="javascript:void(0);" className="index-items" data-id="E">E</a><a href="javascript:void(0);" className="index-items" data-id="F">F</a><a href="javascript:void(0);" className="index-items" data-id="G">G</a><a href="javascript:void(0);" className="index-items" data-id="H">H</a><a href="javascript:void(0);" className="index-items" data-id="J">J</a><a href="javascript:void(0);" className="index-items" data-id="K">K</a><a href="javascript:void(0);" className="index-items" data-id="L">L</a><a href="javascript:void(0);" className="index-items" data-id="M">M</a><a href="javascript:void(0);" className="index-items" data-id="N">N</a><a href="javascript:void(0);" className="index-items" data-id="P">P</a><a href="javascript:void(0);" className="index-items" data-id="Q">Q</a><a href="javascript:void(0);" className="index-items" data-id="R">R</a><a href="javascript:void(0);" className="index-items" data-id="S">S</a><a href="javascript:void(0);" className="index-items" data-id="T">T</a><a href="javascript:void(0);" className="index-items" data-id="W">W</a><a href="javascript:void(0);" className="index-items" data-id="X">X</a><a href="javascript:void(0);" className="index-items" data-id="Y">Y</a><a href="javascript:void(0);" className="index-items" data-id="Z">Z</a>
        </div>
        <div className="city-index-now">A</div>
      </div>

    );
  }
}

export default Seleted;

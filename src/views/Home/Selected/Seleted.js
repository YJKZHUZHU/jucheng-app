import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
class Seleted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: []
    };
  }
  componentWillMount() {
    const api = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(api + 'https://m.juooo.com/Index/getCityList').then((result) => {
      const dataList = result.data.city_list
      // console.log(typeof dataList)
      // console.log(dataList.A.id)
      this.setState({
        cityList: dataList
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
              {/* {this.state.cityList.A.lists.map((v,k)=>{
                return (
                  <a href="javascript:void(0);" className="area-items all-city" cid="53" name="澳门" iscity="0" abbr="AM" data-id="53" key={k}>{v.name}</a>
                )
              })} */}

              { setTimeout(() => {
                {
                  this.state.cityList.A.lists.map((v, k) => {
                    return (
                      <a href="javascript:void(0);" className="area-items all-city" cid="53" name="澳门" iscity="0" abbr="AM" data-id="53" key={k}>{v.name}</a>
                    )
                  })
                }
                console.log(this.state.cityList.A.lists.length)
              }, 1000)
                
              }
              {/* <a href="javascript:void(0);" className="area-items all-city" cid="53" name="澳门" iscity="0" abbr="AM" data-id="53">澳门</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10129" name="安庆" iscity="1" abbr="AQ" data-id="10129">安庆</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10137" name="安顺" iscity="1" abbr="AS" data-id="10137">安顺</a> */}
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="B">B</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10152" name="滨州" iscity="1" abbr="B Z" data-id="10152">滨州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10120" name="蚌埠" iscity="1" abbr="BB" data-id="10120">蚌埠</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10039" name="保定" iscity="1" abbr="BD" data-id="10039">保定</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="5" name="北京" iscity="0" abbr="BJ" data-id="5">北京</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="69" name="百色" iscity="1" abbr="BS" data-id="69">百色</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="71" name="包头" iscity="1" abbr="BT" data-id="71">包头</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10100" name="本溪" iscity="1" abbr="BX" data-id="10100">本溪</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10069" name="白银" iscity="1" abbr="BY" data-id="10069">白银</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="C">C</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10155" name="郴州" iscity="1" abbr="C Z" data-id="10155">郴州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="6" name="成都" iscity="0" abbr="CD" data-id="6">成都</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10029" name="长春" iscity="1" abbr="CHCH" data-id="10029">长春</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="12" name="重庆" iscity="0" abbr="CQ" data-id="12">重庆</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="14" name="长沙" iscity="0" abbr="CS" data-id="14">长沙</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10011" name="常州" iscity="1" abbr="CZ" data-id="10011">常州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10045" name="滁州" iscity="1" abbr="cz" data-id="10045">滁州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10066" name="潮州" iscity="1" abbr="cz" data-id="10066">潮州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="D">D</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10101" name="丹东" iscity="1" abbr="DD" data-id="10101">丹东</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10031" name="德阳" iscity="1" abbr="DEYANG" data-id="10031">德阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10156" name="德州" iscity="1" abbr="DEZ" data-id="10156">德州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10128" name="东方" iscity="1" abbr="DF" data-id="10128">东方</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10019" name="东莞" iscity="1" abbr="DG" data-id="10019">东莞</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10014" name="都江堰" iscity="1" abbr="DJY" data-id="10014">都江堰</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="31" name="大连" iscity="1" abbr="DL" data-id="31">大连</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="73" name="大理" iscity="1" abbr="DL" data-id="73">大理</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="32" name="大庆" iscity="1" abbr="DQ" data-id="32">大庆</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10159" name="大同" iscity="1" abbr="DT" data-id="10159">大同</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10098" name="东营" iscity="1" abbr="Dy" data-id="10098">东营</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10118" name="达州" iscity="1" abbr="DZ" data-id="10118">达州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="E">E</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="33" name="鄂尔多斯" iscity="1" abbr="EEDS" data-id="33">鄂尔多斯</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="F">F</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10163" name="肥东县" iscity="1" abbr="FD" data-id="10163">肥东县</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10023" name="福建" iscity="0" abbr="FJ" data-id="10023">福建</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10145" name="龙岩" iscity="1" abbr="FJLY" data-id="10145">龙岩</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="28" name="佛山" iscity="1" abbr="FS" data-id="28">佛山</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10059" name="釜山" iscity="1" abbr="FS" data-id="10059">釜山</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10146" name="阜阳" iscity="1" abbr="FY" data-id="10146">阜阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="61" name="福州" iscity="1" abbr="FZ" data-id="61">福州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="G">G</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10082" name="桂林" iscity="1" abbr="GL" data-id="10082">桂林</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10008" name="贵阳" iscity="1" abbr="GY" data-id="10008">贵阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="3" name="广州" iscity="0" abbr="GZ" data-id="3">广州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10127" name="赣州" iscity="1" abbr="GZH" data-id="10127">赣州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="H">H</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10016" name="汉中" iscity="1" abbr="HANZHONG" data-id="10016">汉中</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10078" name="廊坊" iscity="1" abbr="HB" data-id="10078">廊坊</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10119" name="淮北" iscity="1" abbr="HBE" data-id="10119">淮北</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10160" name=" 河池" iscity="1" abbr="HC" data-id="10160"> 河池</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10040" name="邯郸" iscity="1" abbr="HD" data-id="10040">邯郸</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10027" name="哈尔滨" iscity="1" abbr="HEB" data-id="10027">哈尔滨</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10162" name="衡阳" iscity="1" abbr="HENGY" data-id="10162">衡阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10165" name="菏泽" iscity="1" abbr="HEZ" data-id="10165">菏泽</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10001" name="合肥" iscity="1" abbr="HF" data-id="10001">合肥</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10058" name="黄冈" iscity="1" abbr="HG" data-id="10058">黄冈</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="72" name="呼和浩特" iscity="1" abbr="HHHT" data-id="72">呼和浩特</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="35" name="海口" iscity="1" abbr="HK" data-id="35">海口</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10042" name="淮南" iscity="1" abbr="HN" data-id="10042">淮南</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10147" name="黄山" iscity="1" abbr="HS" data-id="10147">黄山</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10124" name="衡水" iscity="1" abbr="HSH" data-id="10124">衡水</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10090" name="河源" iscity="1" abbr="HY" data-id="10090">河源</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="11" name="杭州" iscity="0" abbr="HZ" data-id="11">杭州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="38" name="惠州" iscity="1" abbr="HZ" data-id="38">惠州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="J">J</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10061" name="荆州" iscity="1" abbr="J" data-id="10061">荆州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10009" name="晋城" iscity="1" abbr="JC" data-id="10009">晋城</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="64" name="景德镇" iscity="1" abbr="JDZ" data-id="64">景德镇</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10092" name="金华" iscity="1" abbr="JH" data-id="10092">金华</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10168" name="荆门" iscity="1" abbr="JINGMEN" data-id="10168">荆门</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="66" name="九江" iscity="1" abbr="JJ" data-id="66">九江</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10122" name="晋江" iscity="1" abbr="JJTWO" data-id="10122">晋江</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="29" name="江门" iscity="1" abbr="JM" data-id="29">江门</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10006" name="济南" iscity="1" abbr="JN" data-id="10006">济南</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10062" name="嘉兴" iscity="1" abbr="JX" data-id="10062">嘉兴</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10132" name="焦作" iscity="1" abbr="JZ" data-id="10132">焦作</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="K">K</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="52" name="昆明" iscity="0" abbr="KM" data-id="52">昆明</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="L">L</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10148" name="罗城" iscity="1" abbr="LC" data-id="10148">罗城</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10012" name="乐山" iscity="1" abbr="LES" data-id="10012">乐山</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10094" name="辽阳" iscity="1" abbr="LIAOYANG" data-id="10094">辽阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10153" name="丽江" iscity="1" abbr="LJ" data-id="10153">丽江</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10138" name="六盘水" iscity="1" abbr="LPS" data-id="10138">六盘水</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10075" name="丽水" iscity="1" abbr="LS" data-id="10075">丽水</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10169" name="陵水县" iscity="1" abbr="LS" data-id="10169">陵水县</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10005" name="洛阳" iscity="1" abbr="LUOYANG" data-id="10005">洛阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10028" name="临沂" iscity="1" abbr="LY" data-id="10028">临沂</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10133" name="耒阳" iscity="1" abbr="LYang" data-id="10133">耒阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="39" name="连云港" iscity="1" abbr="LYG" data-id="39">连云港</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10167" name="浏阳" iscity="1" abbr="LYY" data-id="10167">浏阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="34" name="兰州" iscity="1" abbr="LZ" data-id="34">兰州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10067" name="柳州" iscity="1" abbr="LZ" data-id="10067">柳州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="M">M</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10144" name="茂名" iscity="1" abbr="MM" data-id="10144">茂名</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10003" name="绵阳" iscity="1" abbr="MY" data-id="10003">绵阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10143" name="梅州" iscity="1" abbr="MZ" data-id="10143">梅州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="N">N</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10010" name="南充" iscity="1" abbr="NANCHONG" data-id="10010">南充</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="41" name="宁波" iscity="0" abbr="NB" data-id="41">宁波</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="26" name="南昌" iscity="1" abbr="NC" data-id="26">南昌</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="54" name="南京" iscity="0" abbr="NJ" data-id="54">南京</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="27" name="南宁" iscity="1" abbr="NN" data-id="27">南宁</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="40" name="南通" iscity="1" abbr="NT" data-id="40">南通</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="P">P</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10064" name="莆田" iscity="1" abbr="PT" data-id="10064">莆田</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="Q">Q</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="43" name="青岛" iscity="1" abbr="QD" data-id="43">青岛</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10096" name="秦皇岛" iscity="1" abbr="QHD" data-id="10096">秦皇岛</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10076" name="曲靖" iscity="1" abbr="QJ" data-id="10076">曲靖</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10135" name="其他" iscity="1" abbr="QT" data-id="10135">其他</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10080" name="清远" iscity="1" abbr="QY" data-id="10080">清远</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="62" name="泉州" iscity="1" abbr="QZ" data-id="62">泉州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="R">R</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10158" name="日本" iscity="1" abbr="RB" data-id="10158">日本</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="44" name="日照" iscity="1" abbr="RZ" data-id="44">日照</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="S">S</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10151" name="随州" iscity="1" abbr="S Z" data-id="10151">随州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10057" name="首尔" iscity="1" abbr="SE" data-id="10057">首尔</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10142" name="韶关" iscity="1" abbr="SG" data-id="10142">韶关</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="4" name="上海" iscity="0" abbr="SH" data-id="4">上海</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10116" name="商丘" iscity="1" abbr="SHQ" data-id="10116">商丘</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="36" name="石家庄" iscity="0" abbr="SJZ" data-id="36">石家庄</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10056" name="宿迁" iscity="1" abbr="SQ" data-id="10056">宿迁</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="65" name="上饶" iscity="1" abbr="SR" data-id="65">上饶</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10074" name="汕头" iscity="1" abbr="st" data-id="10074">汕头</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10070" name="绍兴" iscity="1" abbr="SX" data-id="10070">绍兴</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10055" name="三亚" iscity="1" abbr="SY" data-id="10055">三亚</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10004" name="沈阳" iscity="1" abbr="SYY" data-id="10004">沈阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="1" name="深圳" iscity="0" abbr="SZ" data-id="1">深圳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="25" name="苏州" iscity="1" abbr="SZS" data-id="25">苏州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="T">T</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10021" name="台中" iscity="1" abbr="TAIZHONG" data-id="10021">台中</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="68" name="台北" iscity="1" abbr="TB" data-id="68">台北</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="50" name="天津" iscity="0" abbr="TJ" data-id="50">天津</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10020" name="通辽" iscity="1" abbr="TONGLIAO" data-id="10020">通辽</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10051" name="唐山" iscity="1" abbr="TS" data-id="10051">唐山</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="45" name="桐乡" iscity="1" abbr="TX" data-id="45">桐乡</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="60" name="太原" iscity="1" abbr="TY" data-id="60">太原</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10063" name="泰州" iscity="1" abbr="TZ" data-id="10063">泰州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10081" name="台州" iscity="1" abbr="TZh" data-id="10081">台州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="W">W</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10002" name="威海" iscity="1" abbr="WEIHAI" data-id="10002">威海</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10026" name="潍坊" iscity="1" abbr="WF" data-id="10026">潍坊</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="17" name="武汉" iscity="0" abbr="WH" data-id="17">武汉</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10149" name="乌兰浩特" iscity="1" abbr="WLHT" data-id="10149">乌兰浩特</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10086" name="乌鲁木齐" iscity="1" abbr="WLMQ" data-id="10086">乌鲁木齐</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10139" name="芜湖" iscity="1" abbr="WUHU" data-id="10139">芜湖</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10166" name="梧州" iscity="1" abbr="WUZ" data-id="10166">梧州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10007" name="无锡" iscity="0" abbr="WX" data-id="10007">无锡</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10046" name="温州" iscity="1" abbr="wz" data-id="10046">温州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="X">X</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10060" name="西双版纳" iscity="1" abbr="X" data-id="10060">西双版纳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="51" name="西安" iscity="0" abbr="XA" data-id="51">西安</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10065" name="西昌" iscity="1" abbr="XC" data-id="10065">西昌</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="15" name="香港" iscity="0" abbr="XG" data-id="15">香港</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10134" name="新加坡" iscity="1" abbr="XJP" data-id="10134">新加坡</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="63" name="厦门" iscity="1" abbr="XM" data-id="63">厦门</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10043" name="新乡" iscity="1" abbr="xx" data-id="10043">新乡</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10079" name="襄阳" iscity="1" abbr="XY" data-id="10079">襄阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10161" name="信阳" iscity="1" abbr="XYANG" data-id="10161">信阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10017" name="徐州" iscity="1" abbr="XZH" data-id="10017">徐州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="Y">Y</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10154" name="宜州" iscity="0" abbr="Y Z" data-id="10154">宜州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10013" name="雅安" iscity="1" abbr="YA" data-id="10013">雅安</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10018" name="宜宾" iscity="1" abbr="YB" data-id="10018">宜宾</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="42" name="银川" iscity="1" abbr="YC" data-id="42">银川</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10097" name="盐城" iscity="1" abbr="YCH" data-id="10097">盐城</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10141" name="云浮" iscity="1" abbr="YF" data-id="10141">云浮</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10073" name="宜昌" iscity="1" abbr="YIC" data-id="10073">宜昌</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="70" name="宜春" iscity="1" abbr="YICHUN" data-id="70">宜春</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10077" name="阳江" iscity="1" abbr="YJ" data-id="10077">阳江</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10083" name="营口" iscity="1" abbr="YK" data-id="10083">营口</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10164" name="玉林" iscity="1" abbr="YL" data-id="10164">玉林</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10041" name="烟台" iscity="1" abbr="YT" data-id="10041">烟台</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10022" name="运城" iscity="1" abbr="YUNCHENG" data-id="10022">运城</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10117" name="义乌" iscity="1" abbr="YW" data-id="10117">义乌</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="46" name="益阳" iscity="1" abbr="YY" data-id="46">益阳</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10030" name="扬州" iscity="1" abbr="YZ" data-id="10030">扬州</a>
            </div>
            <a href="javascript:void(0);" className="area-Cap" name="Z">Z</a>
            <div className="cap-list">
              <a href="javascript:void(0);" className="area-items all-city" cid="10038" name="淄博" iscity="1" abbr="ZB" data-id="10038">淄博</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10071" name="自贡" iscity="1" abbr="ZG" data-id="10071">自贡</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="74" name="珠海" iscity="1" abbr="ZH" data-id="74">珠海</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10025" name="湛江" iscity="1" abbr="ZHANJ" data-id="10025">湛江</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10024" name="舟山" iscity="1" abbr="ZHOUSHAN" data-id="10024">舟山</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="48" name="镇江" iscity="1" abbr="ZJ" data-id="48">镇江</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10099" name="湖州" iscity="1" abbr="ZJHZ" data-id="10099">湖州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10044" name="驻马店" iscity="1" abbr="znd" data-id="10044">驻马店</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10140" name="肇庆" iscity="1" abbr="ZQ" data-id="10140">肇庆</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="30" name="中山" iscity="1" abbr="ZS" data-id="30">中山</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10033" name="遵义" iscity="1" abbr="ZY" data-id="10033">遵义</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="56" name="郑州" iscity="1" abbr="ZZ" data-id="56">郑州</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10048" name="株洲" iscity="1" abbr="ZZ" data-id="10048">株洲</a>
              <a href="javascript:void(0);" className="area-items all-city" cid="10130" name="漳州" iscity="1" abbr="ZZh" data-id="10130">漳州</a>
            </div>
          </div>
        </div>
        <div className="city-index js-city-index">
          <a href="javascript:void(0);" data-id="-1" className="index-items">当前</a>
          <a href="javascript:void(0);" data-id="-11" className="index-items">定位</a>
          <a href="javascript:void(0);" data-id="-111" className="index-items">热门</a>
          <a href="javascript:void(0);" className="index-items" data-id="A">A</a><a href="javascript:void(0);" className="index-items" data-id="B">B</a><a href="javascript:void(0);" className="index-items" data-id="C">C</a><a href="javascript:void(0);" className="index-items" data-id="D">D</a><a href="javascript:void(0);" className="index-items" data-id="E">E</a><a href="javascript:void(0);" className="index-items" data-id="F">F</a><a href="javascript:void(0);" className="index-items" data-id="G">G</a><a href="javascript:void(0);" className="index-items" data-id="H">H</a><a href="javascript:void(0);" className="index-items" data-id="J">J</a><a href="javascript:void(0);" className="index-items" data-id="K">K</a><a href="javascript:void(0);" className="index-items" data-id="L">L</a><a href="javascript:void(0);" className="index-items" data-id="M">M</a><a href="javascript:void(0);" className="index-items" data-id="N">N</a><a href="javascript:void(0);" className="index-items" data-id="P">P</a><a href="javascript:void(0);" className="index-items" data-id="Q">Q</a><a href="javascript:void(0);" className="index-items" data-id="R">R</a><a href="javascript:void(0);" className="index-items" data-id="S">S</a><a href="javascript:void(0);" className="index-items" data-id="T">T</a><a href="javascript:void(0);" className="index-items" data-id="W">W</a><a href="javascript:void(0);" className="index-items" data-id="X">X</a><a href="javascript:void(0);" className="index-items" data-id="Y">Y</a><a href="javascript:void(0);" className="index-items" data-id="Z">Z</a>
        </div>
        <div className="city-index-now"></div>
      </div>

    );
  }
}

export default Seleted;

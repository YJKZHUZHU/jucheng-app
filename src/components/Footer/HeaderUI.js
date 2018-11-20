// 这个是 header ui 组件
import React from 'react';
import './Header.scss';


const HeaderUI = (props) => {
    // console.log(props)
  return (
    <div className="header">
        <div className="dcity">
            <i className="iconfont">&#xe60d;</i>
            <span className="home_cityname">{props.address}</span>
        </div>
        <a className="home_search" href="/scarch">
            <i className="iconfont">&#xe617;</i>
            <span className="search_text">
            搜索明星、演出比赛、场馆{props.city_id}
            </span>
        </a>
    </div>
  )
}

export default HeaderUI;
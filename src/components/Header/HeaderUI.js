// 这个是 header ui 组件
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';


const HeaderUI = (props) => {
    // console.log(props)
  return (
    <div className="header">
        <NavLink className="dcity" to='/Location'>
            <i className="iconfont">&#xe60d;</i>
            <span className="home_cityname">{props.address}</span>
        </NavLink>
        <NavLink className="home_search" to="/Search">
            <i className="iconfont">&#xe617;</i>
            <span className="search_text">
            搜索明星、演出比赛、场馆
            </span>
        </NavLink>
    </div>
  )
}

export default HeaderUI;
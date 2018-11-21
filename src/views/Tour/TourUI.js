import React from 'react'
import './index.scss'
import { Button } from 'antd-mobile'
const TourUI = (props) => {
  return (
    <div className='yjk-tour'>
      {/* 我的主页弹窗 */}
      <div className='popover top-menu-popover js-popover hide' id='aaa'>
        <div className='popover-bg js-popover-bg'></div>
        <div className='popover-content'>
          <div className='arrow-wrap'>
            <span className='iconfont icon-iconset0427'></span>
          </div>
          <div className='menu-list-wrap'>
            <ul className='list-block'>
              <li className='list-item'>
                <a className='menu-link' href='javascript:history.go(-1)'>
                  <span className='iconfont icon-shouye'></span>
                  <span>{props.home}</span>
                </a>
              </li>
              <li className='list-item'>
                <a className='menu-link' href='javascript:history.go(-1)'>
                  <span className='iconfont icon-wode1'></span>
                  <span>{props.my}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* } */}

      <header className='navbar tour-navbar'>
        <div className='navbar-inner navbar-on-center'>
          <div className='left'>
            <a className='link' href='javascript:history.go(-1)'>
              <span className='iconfont icon-jiantou2'></span>
            </a>
          </div>
          <div className='center'>巡回演出</div>
          <div className='right'>
            <div className='link fl back-box' onClick={props.show}>
              <span className='iconfont icon-gengduo'></span>
            </div>
          </div>
        </div>
      </header>
      <div className='container'>
        <div className='show-wrap tour-show-wrap'>
          {
            props.list.map((item, index) => {
              return (
                <div className='show-item clearfix' key={index}>
                  <a className='show-left fl' href={`https://m.juooo.com/tour/tourShowInfo?sid=${item.show_id}`}>
                    <img src={item.pic}></img>
                  </a>
                  <div className='show-right fl '>
                    <a className='title' href={`https://m.juooo.com/tour/tourShowInfo?sid=${item.show_id}`}>{item.show_name}</a>
                    <p className='times'>{item.display_show_time}</p>

                    <div className='city-wrap clearfix '>
                      {

                        item.cityItems.splice(0, 5).map((v, k) => {

                          return (

                            <a className='item fl' key={k} href={v.schedular_url}>{v.city_name}</a>
                          )
                        })
                      }
                      <a className='item fl more' href={`https://m.juooo.com/tour/tourShowInfo?sid=${item.show_id}`} >查看更多</a>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <div className='dropload-down'>
          <Button className='dropload-refresh' onClick={props.get} id='noMore'>{props.more}</Button>
        </div>

      </div>

    </div>

  )
}


export default TourUI

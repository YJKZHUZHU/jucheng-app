import React, { Component } from 'react'
import axios from 'axios'
import { Button, Toast } from 'antd-mobile'
import './index.scss'
class Tour extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      list: [],
      pageindex: 1,
      flag:true
    };
  }
  componentDidMount() {
    this.getMore()
  }
  getMore = () => {
    console.log(this.state.pageindex)
    Toast.loading('Loading...', 1, () => {
      console.log('Load complete !!!');
    });
    const api = 'https://bird.ioliu.cn/v1/?url='
    axios.get(api + 'https://m.juooo.com/tour/ShowList?page=' + this.state.pageindex).then((result) => {
      console.log(result.data.data)
      this.setState({
        list: this.state.list.concat(result.data.data),
        pageindex: this.state.pageindex + 1
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  show = (e)=> {
    // 弹窗
    var divtemp = document.getElementById('aaa');
    var divt = window.getComputedStyle(divtemp).getPropertyValue("display");
    console.log(divt)
    if (divt == "none") {
      divtemp.style.display = "block";
    } else {
      divtemp.style.display = "none";
    }
  }
  render() {
    return (
      <div className='yjl-tour'>

        {/* 我的主页弹窗 */}
        {/* if(this.state.flag) { */}
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
                      <span>首页</span>
                    </a>
                  </li>
                  <li className='list-item'>
                    <a className='menu-link' href='javascript:history.go(-1)'>
                      <span className='iconfont icon-wode1'></span>
                      <span>我的聚橙</span>
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
              <div className='link fl back-box' onClick={this.show}>
                <span className='iconfont icon-gengduo'></span>
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <div className='show-wrap tour-show-wrap'>
            {
              this.state.list.map((item, index) => {
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

                          item.cityItems.splice(0,5).map((v, k) => {

                            return (

                              <a className='item fl' key={k} href={v.schedular_url}>{v.city_name}</a>
                            )
                          })
                        }
                        <a className='item fl more' href={`https://m.juooo.com/tour/tourShowInfo?sid=${item.show_id}`}>查看更多</a>
                        {/* <a className='item fl' href='https://m.juooo.com/ticket/88583'>重庆</a>
                      <a className='item fl' href='https://m.juooo.com/ticket/88583'>重庆</a>
                      <a className='item fl' href='https://m.juooo.com/ticket/88583'>重庆</a>
                      <a className='item fl' href='https://m.juooo.com/ticket/88583'>重庆</a>
                      <a className='item fl' href='https://m.juooo.com/ticket/88583'>重庆</a>
                      <a className='item fl more ' href='https://m.juooo.com/tour/tourShowInfo?sid=33506'>查看更多</a> */}
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className='dropload-down'>
            <Button className='dropload-refresh' onClick={this.getMore}>点击加载更多</Button>
            {/* <div className='dropload-noData'>没有更多了</div> */}
          </div>

        </div>
      </div>
    );
  }
}

export default Tour;

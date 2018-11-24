import React from 'react'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import './index.scss'
const TourUI = (props) => {
  console.log(props)
  return (
    <div className='views'>
      <div className='views'>
        <div class="navbar">
          <div class="navbar-inner navbar-on-center">
            <div class="left">
              <a href="javascript:history.back()" class="link"> <span class="iconfont icon-jiantou2"></span>
              </a>
            </div>
            <div class="center">
              <span class="">
                确认订单
              </span>
            </div>
          </div>
        </div>
        <div className='pages'>
          <div className='panel'>
            <div className='grid order-media-grid buy-grid'>
              <div className='grid-inner'>
                <div className='grid-inner'>
                  <ul className='list-block'>
                    <li className='list-item border-bottom schedular-info'>
                      <div className='media-panel media-style-1 border-bottom'>
                        <div className='media-wrap'>
                          <div className='img-wrap'>
                            <a href='' className='link'>
                              <img className='img-media' alt='【万有音乐系】刘瑞琦“温暖的房间”2018巡回演唱会 济南站' src='http://image.juooo.com/group1/M00/02/14/rAoKNVtiwvKAarn7AAB2P6sw5rA772.jpg' />
                            </a>
                          </div>
                        </div>
                        <div className='media-content'>
                          <div className='media-title'>
                            <a className='link' href='https://m.juooo.com/ticket/88638'>
                              【万有音乐系】刘瑞琦“温暖的房间”2018巡回演唱会 济南站</a>
                          </div>
                          <div className='media-info margin-top20'>
                            <p className=''>时间:2018.11.24 19:30</p>
                            <p className='场馆：历山剧院'></p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className='drop-menu-wrap'>
                    <div className='flex-space-between'>
                      <span>合计（1张）：</span>
                    </div>
                    <div className='price-wrap'>
                      <span>￥180.00</span>
                      <span className='iconfont icon-Group-'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid discount-grid">
              <div class="grid-inner">
                <div class="single-row" id="promotion-last" data-activity-sale="0">
                  <div class="left">
                    <span class="iconfont icon-liwu"></span>
                    <span class="title">活动/优惠</span>
                  </div>
                  <div class="right f-24">
                    <span class="state">活动/优惠券/优购码</span>
                    <span class="iconfont icon-jiantou"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid">
              <div class="grid-inner">
                <ul class="list-block form-list f-28">
                  <li class="list-item">
                    <div class="flex-space-between">
                      <span>商品合计：</span>
                      <div class="right">
                        <span class="c-333">￥180.00</span>
                      </div>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="flex-space-between">
                      <span>运费合计：</span>
                      <div class="right">
                        <span class="c-333">￥<span id="js-shipping-free">0</span></span>
                      </div>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="flex-space-between">
                      <span>优惠：</span>
                      <div class="right">
                        <span class="c-333">-￥<span id="js-activity-sale-text">0</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="list-item js-last-list-tiem">
                    <div class="flex-space-between">
                      <span>电子票立减：</span>
                      <div class="right">
                        <span class="c-333" id="js-shippingid-money">-10</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>            
            <div className='footer footer4-1 buy-foot'>
              <ul className='flex-avg-wrap'>
                <li className='flex-item'>
                  <div className='deduction'>
                    <span>应付：</span>
                    <span className='c-primary'>￥
                      <span className=''>170</span>
                    </span>
                  </div>
                </li>
                <li className='flex-item'>
                  <div className='btn-wrap'>
                    {/* <Button onClick={successToast}>success</Button> */}
                    <Button className='btn btn-block btn-rect' onClick={props.submit}>确定</Button>
                  </div>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}


export default TourUI

import React,{Fragment} from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';
import {NavLink} from 'react-router-dom';

import './Ticket.css';

const Item = Popover.Item;

const TicketUI =(props)=>{
    return(
        <Fragment>
                <NavBar
                    className='navbar'
                    mode="light"
                    rightContent={
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        // visible={this.state.visible}
                        overlay={[
                        (<Item key="4" value="scan" className='to-home' icon={<img src='./imgs/house-icon.png' className="am-icon am-icon-xs" alt="" />} data-seed="logId">首页</Item>),
                        (<Item key="5" value="special" className='myjuooo' icon={<img src='./imgs/house-icon.png' className="am-icon am-icon-xs" alt="" />} style={{ whiteSpace: 'nowrap' }}>我的聚橙</Item>),
                        
                        ]}
                        align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                        }}
                    >
                        <div style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                        
                        }}
                        >
                        <Icon type="ellipsis" />
                        </div>
                    </Popover>
                    }
                ><div className="navbar-inner1 navbar-on-center">
                <div className="left">
                        <a href="javascript:history.go(-1);" className="link">
                            <span className="iconfont icon-jiantou2"></span>
                        </a>
                    </div></div>
                    演出详情
                </NavBar>
            <div className='views detail-wrapper'>
                {/* 演出详情 */}
                <div className='section-swiper'>
                    {
                       
                        props.info.map((item,index)=>{
                            return(
                                <Fragment  key={index} >
                                    {/* 演出海报 */}
                                    <article className="poster img-wrap js-sche-wrap ab-light"style={{backgroundColor: 'rgb(9, 22, 38)'}}>
                                        <img className="img-fg1" id="img" 
                                        src={require=item.pic} 
                                        alt="【万有音乐系】《V.K克“时空涟漪”2018巡回演奏会》---杭州"/>
                                        <div className="poster-bg-shadow">
                                        </div>
                                        <div className="poster-bg-wrapper">
                                            <div className="poster-bg"></div>
                                        </div>
                                        <div className="poster-fg"></div>
                                        <div className="poster-img">
                                            <div className="img-bg">
                                                <span className="logo_i"></span>		</div>
                                            <a className="round-num js-tour-num"  href="https://m.juooo.com/tour/tourshowinfo?sid=34988">7场巡演</a>
                                        </div>
                                    </article>
                                        {/* 演出信息 */}

                                    <article className="text-desc">
                                        <h3 className="title">{item.show_name}</h3>
                                        <div className="row">
                                            时间：<span className="time">{item.display_show_time}</span>
                                        </div>
                                        <a className="row clearfix venue" href="javascript:;">
                                            <span className="fl">场馆：</span>
                                            <span className="place fl js-venue">{item.venue_name}</span>
                                            <i className="iconfont icon-dingwei fl venue-address"></i>
                                        </a>
                                        <div className="row price">
                                            <i className="icon icon-yuan"></i>
                                            <span className="num">
                                                {item.show_price}			
                                            </span>
                                        </div>
                                        <div className="support" href="javascript:;">
                                            <div className="left">
                                                支持：<span className="sup-item">橙PLUS卡免邮</span>
                                                    <span className="sup-item">电子票</span>
                                                    <span className="sup-item">橙PLUS卡双倍积分</span>
                                            </div>
                                        </div>
                                        <div className="vipcard">
                                            <a className="row js-vipcard clearfix">
                                                <div className="left clearfix fl">
                                                    <div className="fl txt3">欢聚橙卡：</div>
                                                    <div className="sup fl cleafix card-sup">
                                                        <div className="sup-wrap clearfix">
                                                            <p className="sup-item fl clearfix">
                                                                <span className="txt1 fl">橙PLUS卡</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right fr">
                                                    <i className="iconfont icon-gengduo"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="stu-approve  pb1 ">
                                        </div>
                                    </article>           
                                </Fragment>    
                                
                            )
                        })
                    }
                    {/* 演出简介 */}
                    <article className="brief-intro">
                        <h3 className="title">— 演出介绍 —</h3>
                        <p className="brief-txt"> V.K克，流行钢琴演奏界领先指标，惊人的创作才华结合璀璨的演奏技巧，被粉丝们誉为《流行钢琴界的周杰伦》。如鬼才般不受局限的创作风格横跨个人演奏专辑，电玩、广告、戏剧等配乐，且担任多部电影音乐总监，打</p>
                        <a href="javascript:;" className="go-detail" onClick={props.onClick}>查看详情 <span className="iconfont icon-paixujiantouxia"></span></a>
                    </article>
                    <div className="ad-box">
                        <a href="https://click.juooo.com/click/index?url=https%3A%2F%2Fm.juooo.com%2FDistributor%2Fcentre&amp;type=1&amp;ad_id=58&amp;flag=TSF">
                            <img 
                            src={require=("http://image.juooo.com/group1/M00/01/73/rAoKmVtz3gmAVyioAAB9UlGkigo299.jpg")} 
                            title="邀请你成为聚橙分享家" alt="邀请你成为聚橙分享家"/>
                        </a>
                    </div>
                    {/* 购票须知 */}
                    <article className="ticket-notice">
                        <h3 className="title">— 购票须知 —</h3>
                        <div className="ticket-txt">
                            <p>1.为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
                            <p>2.网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
                            <p>3.成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
                            <p>4.因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
                        </div>
                        <div className="in-to-know">
                            入场须知： <span className="text">1.2米以下儿童谢绝入场（儿童项目除外），1.2米以上儿童需持票入场</span>
                        </div>
                    </article>
                    <div className="empty"></div>
                    <div className="dt-action">
    
                        <div id="juo-meiqia" className="service-btn">
                            <span className="icon"></span>
                            <span className="txt">客服</span>
                            <span className="line"></span>
                        </div>
                        <NavLink className="dt-action-btn bg-orange buy-now" to='/price'>立即购票</NavLink>
                    </div>
                </div>
            </div>
        </Fragment>    
    )
}

export default TicketUI;
import React from 'react';
import './Info.css';
import { Modal} from 'antd-mobile';
import {NavLink} from 'react-router-dom';
// import './Info.scss'

const InfoUI =(props)=>{
    return(
        <div className='views round-detail'>
            <div className='view'>
                {/* 顶部导航     */}
                
                <header className="navbar detail-header">
                    <div className="navbar-inner navbar-on-center">
                        <div className="left js-personal-link">
                            <a href="javascript:;" className="link">
                                <span className="iconfont icon-jiantou2"></span>
                            </a>
                        </div>
                        <div className="center">
                            巡演详情
                        </div>
                        <div className="right">
                            <a href="javascript:;" className="link open-panel icon-only js-share-btn">
                                <span className="icon icon-share" onClick={props.onClick}></span>
                            </a>
                        </div>
                    </div>
                </header>
                    {/* 弹框阴影 */}
                <div className="shadow-bg js-shadow-bg"></div>
                {/* 分享弹框 */}
                <Modal
                    popup
                    visible={props.modal2}
                    onClose={props.onClose}
                    animationType="slide-up"
                    >
                    <div className="share-layout" style={{'height': '9.05333rem'}}>
                        <div className="title">分享<i className="icon icon-remove js-share-close js-close-btn"></i></div>
                        <div className="share-methods">
                            <div className="item">
                                <a className="icon-weibo" src="javascript:;"></a>
                                <span>微博</span>
                            </div>
                            <div className="item">
                                <a className="icon-qq" src="javascript:;"></a>
                                <span>腾讯微博</span>
                            </div>
                            <div className="item">
                                <a className="icon-qzone" src="javascript:;"></a>
                                <span>QQ空间</span>
                            </div>                    
                        </div>
                    </div>
                       
                </Modal>
                <div className='pages'>
                    <main className='js-main-content'>
                        {/* 演出海报 */}
                        {
                            props.yanchu.map((item,index)=>{
                                return(
                                    <article className="poster" key={index}>
                                        <div className="poster-bg-shadow">
                                        </div>
                                        <div className="poster-bg-wrapper">
                                            <img className="poster-bg" src={require=item.pic}/>
                                        </div>
                                        
                                        <div className="poster-fg"></div>
                                        <div className="poster-img">
                                            <div className="img-bg">
                                                <img className="img-fg" src={require=item.pic}/>
                                            </div>
                                            <a className="round-num" href="javascript:;">{item.schedular_num}</a>
                                        </div>
                                    </article>
                                )
                            })
                        }
                        {/* 演出信息 */}
                        {
                            props.yanchu.map((item,index)=>{
                                return (
                                    <article key={index} className='text-desc'>
                                        <h3 className='title'>
                                            {item.show_name}
                                        </h3>
                                        <div className='row'>
                                            时间：<span className="time">{item.display_show_time}</span>
                                        </div>
                                    </article>
                                )
                            })
                        }
                        {/* 演出排期 */}
                        <article className="round-list">
                      	<div className="v-line"></div>	
                            <ul className="round-list-wrapper">
                                {props.yanchu.map((item,index)=>{
                                    return item.cityItems.map((item,index)=>{
                                        return(
                                            <li className="item active " key={index}>
                                                <div className="item-left">
                                                    <span className="day">11.24</span>
                                                    <span className="time">周六 19:30</span>
                                                </div>
                                                <div className="item-center">
                                                    <div className="dot"></div>
                                                </div>
                                                <div className="item-right js-buy-ticket" id="88638">
                                                    <span>{item.city_name}</span>
                                                    <span className="locate"><i className="iconfont icon-dingwei"></i>{item.city_name}剧院</span>
                                                </div>
                                                <NavLink className="buy-btn btn btn-default" to='/ticket/88570'> 购票</NavLink>
                                            </li> 
                                        )
                                    })
                                })}
                            </ul>
                        </article>
                    </main>
                </div>
            </div>
        </div>  
    )
}

export default InfoUI;
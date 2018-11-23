import React,{Fragment} from 'react';
import {NavBar} from 'antd-mobile';
import './price.css';


const PriceUI =(props)=>{
    return (
        <Fragment>
            <NavBar
                className='navbar'
                mode="light"
            >
                <div className="navbar-inner1 navbar-on-center">
                <div className="left">
                        <a href="javascript:history.go(-1);" className="link">
                            <span className="iconfont icon-jiantou2"></span>
                        </a>
                    </div></div>
                    选择票价
            </NavBar>
            <main className='item-select'>
                <div className="row spot-select-wrapper">
					<div className="title">选择场次</div>
					<div className="item spot-select js-session-list">
                        <div className="item active">
                            <span className="s-date">2019.01.01</span>
                            <span className="s-time">周二 20:00</span>
                        </div>
                    </div>
				</div>
                <div className="row price-select-wrapper">
				<div className="title">选择票价</div>
					<div className="price-select">
                        {
                            props.price.map((item,index)=>{
                                return(
                                    <div className="item" key={index} onClick={()=>{
                                        props.add(index);
                                    }}>
                                        <span className="row normal-price">
                                            <i className="icon icon-yuan"></i>
                                            {item}
                                        </span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="buy-tips card-deduct-hint" style={{display:'none'}}>
                            <p>购票说明：</p>
                            <p className="deduct"></p>
                        </div>
				    </div>
            </main>
            <div className="sele-footer active">
                <div className="sele-tickets" style={{display: 'none'}} id='1'>
                {
                    props.onePrice.map((item,index)=>{
                        return(
                            <div className="row" key={index}>
                                <span className="price">{item}</span>
                                <div className="operate">
                                    <i className="iconfont icon-ic_reduce js-minus disable" onClick={()=>{props.reduce(index)}}></i>
                                    <span className="num">1</span>
                                    <i className="iconfont icon-zengjia js-plus" onClick={()=>{props.jia(item)}}></i>
                                    <span className="line"></span>
                                    <i className="iconfont icon-shanchu js-remove" onClick={()=>{
                                        props.delete(index)
                                    }}></i>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="sele-action">
                    <div className="action-left">
                        <span className="sele-num js-sele-num">
                                <i className="icon icon-unie624" id='show' onClick={props.show}></i>
                                <span className="num">{props.onePrice.length}</span>张
                        </span>
                        <span className="line"></span>
                        <span className="sele-price js-sele-price"><i className="icon icon-yuan"></i>{props.total}</span>
                    </div>
                    <span className="sele-confirm js-buy-confirm " id="sureBuyIt">确定</span>
                    <input type="hidden" value="0" id="is_can_buy" />
                </div>
            </div>
            
        </Fragment>    
    )
}

export default PriceUI
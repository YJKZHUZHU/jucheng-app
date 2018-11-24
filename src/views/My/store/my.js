import React, { Component,Fragment } from 'react';
import '../my.scss'
import {Link,Redirect} from 'react-router-dom'
import {Cookies} from 'react-cookies'
import { connect } from 'react-redux';
import Footer from '../../../components/Footer/Footer';

class My extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '请登入',
            titlt: '请登入'
        }
    }

    // isLogin(props) {
    //     if (document.cookie.split('=')[1]) {
    //         console.log(11111111);
    //         this.props.history.push('/login')
    //     }
    // }

    componentWillMount(){
        var username = document.cookie.split('=')[1]
        console.log(username)
        if(username != undefined){
            this.setState({
                username: username
            })
        }
       
    }
    exit = ()=> {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
		if(keys) {  
			for(var i = keys.length; i--;)  
				document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
		}  
    }
    render(){
        return(
            <div className='sf-container'>
                
                <div className="top">
                   <div className="top_logo">
                       <img className="top_logo_img" src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png" />
                    </div>
                       <Link to="/login" className="username name" id='change'>{this.state.username}</Link>
                   <p className="grade">ID:6338086</p>
                   <div className="plus">
                       <img className="plus_img" src={require("../img/PLUS.png")} />
                   </div>
                </div>
                <div className="category-wrap">
                     <ul className="flex-avg-wrap">
                        <li className="flex-item">
                           <a>0.00元</a>
                           <p>余额</p>
                        </li>
                        <li className="flex-item">
                           <a>0分</a>
                           <p>积分</p>
                        </li>
                        <li className="flex-item">
                           <a>0张</a>
                           <p>橙卡</p>
                        </li>
                        <li className="flex-item">
                           <a>0张</a>
                           <p>优惠券</p>
                        </li>
                     </ul>
                </div>
                <p className="grey"></p>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-order"></i> <span className="click">我的订单</span><span className="money">待付款0/待收货0 ></span></Link>
                    </div>
                </div>
                <p className="grey"></p>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-order"></i> <span className="click">电子票夹</span><span className="money1"> ></span></Link>
                    </div>
                </div>
                <p className="grey"></p>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-qiabao"></i> <span className="click">我的卡包</span><span className="money3">了解详情 ></span></Link>
                    </div>
                </div>
                <p className="grey"></p>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-huiyuanzhongxin"></i> <span className="click">会员中心</span><span className="money1"> ></span></Link>
                    </div>
                </div>
                <p className="grey"></p>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-attention"></i> <span className="click">我的关注</span><span className="money1"> ></span></Link>
                    </div>
                </div>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-shouhuodizhi"></i> <span className="click">收货地址</span><span className="money1"> ></span></Link>
                    </div>
                </div>
                <p className="grey"></p>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-wodexiaoxi"></i> <span className="click">我的消息</span><span className="money1"> ></span></Link>
                    </div>
                </div>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-yijianfankui1"></i> <span className="click">意见反馈</span><span className="money1"> ></span></Link>
                    </div>
                </div>
                <p className="grey"></p>
                <div className="deom">
                    <div className="deom_more">
                        <Link to=""><i className="iconfont icon-lianxidianhua--"></i> <span className="click">联系电话</span><span className="money4">400-185-8666 ></span></Link>
                    </div>
                </div>
                <div className="online">
                   <Link to="/login" className="orgin" onClick={this.exit}><i className="iconfont icon-lianxidianhua--"></i> <span className="lianxidianhua">退出登录</span></Link>
                </div>
                <Footer/>
            </div>
        )
    }
  
}

// const mapStateToProps = () => {
//     return {

//     }
// }

// const mapDispatchToProps = () => {
//     return {

//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(My);

export default My;
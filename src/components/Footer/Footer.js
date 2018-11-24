import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import { Router as HashRouter,Redirect} from 'react-router-dom'

// mapStateToProps 输入

// mapDispatchToProps 输出


class Footer extends Component {
    // constructor(props){
    //     super(props);
    //     console.log(props)
    //     this.state = {
    //     }
    // }
    login = (e)=> {
        // alert(this.props)
        console.log(e)
        var ds = document.cookie.split('=')[1]
        // console.log(ds)
        if(ds != undefined){
            // console.log(this.props)
            // this.props.history.push('/login')
            return (<Redirect to="/login" />);
            
        }
    }
  render() {
    return(
      <div className="footer">
        <NavLink to="/" exact className="tag">
            <p></p>
            <span>首页</span>
            </NavLink>
        <NavLink to="/Action" exact className="tag">
            <p className="ac"></p>
            <span>演出库</span>
        </NavLink>
        
        <NavLink to="/My" exact className="tag" onClick={this.login}>
            <p className="mi"></p>
            <span>我的</span>
        </NavLink>
    </div>
    )
  }
}
export default  Footer;



import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';


// mapStateToProps 输入

// mapDispatchToProps 输出

class Footer extends Component {
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
        <NavLink to="/My" exact className="tag">
            <p className="mi"></p>
            <span>我的</span>
        </NavLink>
    </div>
    )
  }
}
export default Footer;

// export default connect(null, null)(Header);

import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Link exact to='/index/selectCity'>定位</Link>
        <br />
        <br />
        <br />
        <br />
        <br />  
        <Link  to='/Tour/moreTourShowList'>更多演出</Link>
        <br/>
        <br />
        <br />
        <br />
        <br />  
        <Link to='/search/index'>搜索</Link>

      </div>
    );
  }
}

export default Home;

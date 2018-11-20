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
        <Link exact to='/Tour/moreTourShowList'>更多演出</Link>
      </div>
    );
  }
}

export default Home;

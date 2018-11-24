import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Link to='/Tour/moreTourShowList'>更多演出</Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to='/order/order'>订单</Link>
      </div>
    );
  }
}

export default Home;

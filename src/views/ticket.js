import React,{Component,Fragment} from 'react';
class Ticket extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Fragment>
                <p>{this.props.match.params.sid}</p>
            </Fragment>
        )
    }
    componentDidMount(){
        //根据ID请求
    }
}

export default Ticket;
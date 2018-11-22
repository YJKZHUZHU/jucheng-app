import React,{Component} from 'react';
import {connect} from 'react-redux';
import TicketUI from './TicketUI';
import axios from 'axios';
import store from '../../store/index'

class Tickets extends Component{
    componentWillMount(){
        // console.log(3)
        this.getinfo()
    }
    
    render(){
        return(
            <TicketUI {...this.props}></TicketUI>  
        )
    }
    getinfo(){
        axios.get('https://bird.ioliu.cn/v1/?url=m.juooo.com/Show/getShowList').then((result)=>{
            axios.get('https://bird.ioliu.cn/v1/?url=m.juooo.com/index/hotsShowList').then((res)=>{
            for(var i=0;i<result.data.data.list.length;i++){

                if(result.data.data.list[i].id===this.props.location.pathname.split('/')[2]){
                    for(var j=0;j<res.data.data.length;i++){
                        if(res.data.data[j].show_id===result.data.data.list[i].show_id){
                            store.dispatch({
                                type:'GETINFO',
                                info:res.data.data[j],
                                hash:this.props.location.pathname.split('/')[2]
                            })
                        }
                    }
                }else{
                    const {history}=this.props
                    history.replace("/");
                    alert('这个数据不存在')
                    return false
                    // console.log(1)
                }
            }
            }).catch((res)=>{
                console.log(res);
            })
            
        }).catch((result)=>{
            console.log(result);
        })
        
    }
}

const mapstateToProps=({Ticket})=>{
    return{
        title:Ticket.title,
        more:Ticket.more,
        info:Ticket.info,
        hash:Ticket.hash
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onClick:()=>{
            dispatch({
                type:'MORE',
            })
        }
    }
}

export default connect(mapstateToProps,mapDispatchToProps)(Tickets);
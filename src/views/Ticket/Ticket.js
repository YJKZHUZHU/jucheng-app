import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Toast} from 'antd-mobile';
import TicketUI from './TicketUI';

import axios from 'axios';
import store from '../../store/index'

class Tickets extends Component{
    shouldComponentUpdate(){
        if(this.props.info.length!==0){
            return false
        }else{
            return true
        }
    }
    componentWillMount(){
        Toast.loading('加载中');
        this.getinfo()
        this.getLoaction()
    }
    
    render(){
        return(
            <TicketUI {...this.props}></TicketUI>  
        )
    }

    getinfo(){
        axios.get(`https://bird.ioliu.cn/v1/?url=m.juooo.com/Show/getShowList`).then((result)=>{
            // console.log(result.data)
            axios.get('https://bird.ioliu.cn/v1/?url=m.juooo.com/index/hotsShowList').then((res)=>{
            for(var i=0;i<result.data.data.list.length;i++){

                if(result.data.data.list[i].venue_id===this.props.location.pathname.split('/')[2]){
                    for(var j=0;j<res.data.data.length;j++){
                        if(res.data.data[j].venue_id===result.data.data.list[i].venue_id){
                            store.dispatch({
                                type:'GETINFO',
                                info:res.data.data[j],
                                hash:this.props.location.pathname.split('/')[2]
                            })
                            Toast.hide();

                        }
                    }
                }
                // else{
                //     const {history}=this.props
                //     history.replace("/");
                //     alert('这个数据不存在')
                //     return false
                // }
            }
            }).catch((res)=>{
                console.log(res);
            })
            
        }).catch((result)=>{
            console.log(result);
        })
    }
    getLoaction(){
        window.localStorage.setItem('userinfo',222);
        var a=localStorage.getItem('userinfo')
        console.log(a)
    }
}

const mapstateToProps=({Ticket})=>{
    return{
        title:Ticket.title,
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
import React,{Component} from 'react';
import {connect} from 'react-redux';
import InfoUI from './InfoUi';
import axios from 'axios';
import store from '../../store/index'

class Info extends Component{
    componentWillMount(){
        this.getInfo();
    }
    render(){
        return(
            <InfoUI {...this.props}></InfoUI>  
        )
    }
    
    getInfo(){
        axios.get('https://bird.ioliu.cn/v1/?url=m.juooo.com/Tour/ShowList').then((res)=>{
            // this.props.list.push(res.data.data);
            store.dispatch({
                type:'GETLIST',
                list:res.data.data,
                hash:this.props.location.search.split('=')[1]
            })
            console.log(this.props)
        }).catch((res)=>{
            console.log(res);
        })
        
    }
}

const mapStateToProps=({Info})=>{
    return{
        // title:Info.title,
        modal2:Info.modal2,
        list:Info.list,
        hash:Info.hash,
        yanchu:Info.yanchu
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onClick:()=>{
            dispatch({
                type:'TANCHU',
                modal2:true
            })
        },
        onClose:()=>{
            dispatch({
                type:'CLOSE',
                modal2:false
            })
        },
        ont:()=>{
            dispatch({
                type:'TIAOZHUAN'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info);
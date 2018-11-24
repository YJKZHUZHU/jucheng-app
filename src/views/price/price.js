import React,{Component} from 'react';
import {connect} from 'react-redux';
import PriceUI from './priceUI.js';

class Prices extends Component{
    render(){
        return(
            <PriceUI {...this.props}></PriceUI> 
        )
    }
}

const mapStateToProps=({Price})=>{
    return {
        price:Price.price,
        total:Price.total,
        onePrice:Price.onePrice,
        sum:Price.sum
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return {
        add:(index)=>{
            dispatch({
                type:'ADD',
                index
            })    
        },
        delete:(index)=>{
            dispatch({
                type:'DELETE',
                index
            })
        },
        show:()=>{
            dispatch({
                type:'SHOW'
            })
        },
        jia:(item)=>{
            dispatch({
                type:'JIA',
                item
            })
        },
        reduce:(index)=>{
            dispatch({
                type:'REDUCE',
                index
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Prices);
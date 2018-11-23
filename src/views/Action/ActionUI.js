import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import './index.scss'

const ActionUI = (props) => {
    return(
        <Fragment>
        <div className='topNavWrap'>
            <ul className='topNav'>
               {
                props.slTopBar.map((item,index)=>{
                    return(
                        <li 
                        key={index} 
                        onClick={()=>{props.getData(item.caid,props.city_id)}}
                        >
                        <span
                        onClick={()=>{props.setnavNum(index)}}
                        className={props.navNum === index ? "ative_navitem" : 'navitem'}  
                        >{item.tit}</span>
                        </li>
                    )    
                })
               }
            </ul>
        </div>
         <ul className='infoList'>
         {
             props.goodList.map((item,index)=>{
                 return(
                     
                     <li key={index}>
                     <Link to={{
                         pathname:`/Ticket/${item.id}`,
                     }}>
                         <div className='list_img'>
                             <img src={'http://image.juooo.com/'+item.pic } alt=""/>
                             <div dangerouslySetInnerHTML = {{ __html: item.ico }} />
                         </div>
                         <div className="list_txt">
                            <p className='list_txt_tit'>{item.schedular_name}</p>
                            <p className='list_showtime'>{item.show_time}</p>
                            <p className='list_addr'>{item.v_name}</p>
                            <p className='list_price'>￥<span>{item.min_price}</span>-<span>{item.max_price}</span></p>
                         </div>  
                     </Link>   
                     </li>
                 )
             })
             
         }
         <div className='showMore' onClick={()=>{props.showMore(props.pageNum,props.total,props.goodList.length,props.cid,props.city_id)}}>{props.txt}</div>
      </ul>
      </Fragment>
    )
}

export default ActionUI

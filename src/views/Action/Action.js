import React ,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import{ChangeNavnum,getList,AddMore,DefaultInfo} from './store/actionCreators';
import './index.scss';
import store from './store/index'


class Action extends Component {
  constructor(props){
      super(props);
    
      this.showMore=this.showMore.bind(this)

      this.state = store.getState();
      store.subscribe(() =>{
        this.setState (store.getState());
      })
  }

  getData(caid,num){
       
        store.dispatch(getList(caid,num))

  }
  setnavNum = (num) =>{
   
      store.dispatch(ChangeNavnum(num));
  }

  //加载更多
  showMore (pagenum,total,length,cid){

     store.dispatch(AddMore(pagenum,total,length,cid)); 
  }


  componentWillMount(){
    axios.post('https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Show/getShowList',{
        city_id:'1',
        category:'',
        page:'1'
    }).then(result=>{
        var data = result.data.data.list
        var total = result.data.data.total
        console.log(data)

        store.dispatch(DefaultInfo(data,total))

    }).catch(err=>{
        console.log(err)
    })
  }

  render() {
    return(
        <Fragment>
        <div className='topNavWrap'>
            <ul className='topNav'>
               {
                this.state.slTopBar.map((item,index)=>{
                    return(
                        <li 
                        key={index} 
                        onClick={()=>{this.getData(item.caid)}}
                        >
                        <span
                        onClick={()=>{this.setnavNum(index)}}
                        className={this.state.navNum === index ? "ative_navitem" : 'navitem'}  
                        >{item.tit}</span>
                        </li>
                    )    
                })
               }
            </ul>
        </div>
         <ul className='infoList'>
         {
             this.state.goodList.map((item,index)=>{
                 return(
                     
                     <li key={index}>
                     <Link to={{
                         pathname:`/ticket/${item.id}`,
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
         <div className='showMore' onClick={()=>{this.showMore(this.state.pageNum,this.state.total,this.state.goodList.length,this.state.cid)}}>{this.state.txt}</div>
      </ul>
      </Fragment>
    )
  }
}



export default Action
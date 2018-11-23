import{NO_MORE,ADD_MORE,DEFAULT_INFO,INIT_LIST,CHANGE_NAVNUM} from './actionTypes'
import axios from 'axios';
import { Toast } from 'antd-mobile';
export const ChangeNavnum = (num) =>{
    return{
        type: CHANGE_NAVNUM,
        num
    }
}

export const getList = (caid,city_id) =>{
   
    return(dispatch,getState) => {
        Toast.loading('加载中...');
        axios.post('https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Show/getShowList',{
            city_id:city_id,
            category: caid,
            page:'1'
        }).then(result=>{
            var data = result.data.data.list
            var total = result.data.data.total
            var txt = '加载更多'
            Toast.hide();
            dispatch(initList(data,total,txt,caid))       
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const initList = (list,total,txt,caid) => {
    return{
        type : INIT_LIST,
        list,
        total,
        txt,
        caid
    }
}
export const AddMore = (pagenum,total,length,cid,city_id) =>{
    // return{
    //     type:ADD_MORE
    // }
    return(dispatch,getState) => {
        let npage = pagenum;
        npage++;
        if(total > length){
        Toast.loading('加载中...');
        axios.post('https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Show/getShowList',{
            city_id:city_id,
            category: cid,
            page: npage
        }).then(result=>{
            var ndata = result.data.data.list
            dispatch(AddList(ndata,npage))
            Toast.hide();
        }).catch(err=>{
            console.log(err)      
        })
        }  else{
            dispatch(NoMore())
        }  
    }

}

export const AddList = (list,page) =>{
    return{
        type:ADD_MORE,
        list,
        page
    }
}

export const NoMore = () =>{
    return{
        type: NO_MORE
    }
}

export const DefaultInfo = (data,total) =>{
    return{
        type:DEFAULT_INFO,
        data,
        total
    }
}



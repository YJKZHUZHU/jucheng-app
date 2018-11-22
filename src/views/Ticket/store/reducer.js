import axios from 'axios';
const defaultState={
    title:'买票页',
    more:'',
    hash:'',
    info:[]
}

export default (state=defaultState,action)=>{
    if(action.type==='MORE'){
        // console.log(state.title);
        axios.get('https://bird.ioliu.cn/v1/?url=m.juooo.com/ticket/90093').then((res)=>{
            console.log(res.data);
        }).catch((res)=>{
            console.log(res);
        })
    }
    if(action.type==='GETINFO'){
        let newState=JSON.parse(JSON.stringify(state));
        // console.log(222)
        newState.info.push(action.info);
        newState.hash=action.hash;
        console.log(newState)
       
        return newState;
    }


    return state
}
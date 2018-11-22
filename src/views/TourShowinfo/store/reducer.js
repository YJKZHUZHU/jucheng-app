const defaultState={
    yanchu:[],
    modal2: false,
    list:[],
    hash:''
}

export default (state=defaultState,action)=>{
    if(action.type==="TANCHU"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.modal2=action.modal2;
        return newState  
    }
    if(action.type==='CLOSE'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.modal2=action.modal2;
        return newState
    }
    if(action.type==='GETLIST'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list=action.list;
        newState.hash=action.hash;
        for(var i=0;i<newState.list.length;i++){
           if (newState.list[i].show_id===newState.hash){
            newState.yanchu.push(newState.list[i])
           }
        }
        console.log(newState.yanchu);
        return newState;
    }
    if(action.type=='TIAOZHUAN'){
        console.log(1)
        // push()
    }
    return state;
}

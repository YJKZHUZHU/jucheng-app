const defaultState={
    price:[280,480,680,880,1080,1280,2180,1180,1480],
    total:0,
    onePrice:[],
    sum:0
}

export default (state=defaultState,action)=>{
    var sid=document.getElementById('1');
    var show=document.getElementById('show');
    if(action.type==="ADD"){
        show.className='icon icon-Group-';
        sid.style.display='block';
        let newState = JSON.parse(JSON.stringify(state));
        if(newState.onePrice.length<6||newState.sum<6){
            for(var i=0;i<=newState.onePrice.length;i++){
                if(newState.onePrice.length==0||(newState.onePrice[i].price!=newState.price[action.index])){
                    newState.onePrice.push({
                        price:newState.price[action.index],
                        num:1
                    })
                    newState.sum+=1;
                    newState.total+=newState.price[action.index]
                    return newState;
                }else{
                    newState.onePrice[i].num+=1;
                    newState.total+=newState.price[action.index]

                    return newState;
                }
            }
        }    
    }
    if(action.type==='DELETE'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.total-=newState.onePrice[action.index].price*newState.onePrice[action.index].num;
        newState.onePrice.splice(action.index, 1);
        return newState;
    }
    if(action.type==='JIA'){
        let newState = JSON.parse(JSON.stringify(state));
        if(newState.onePrice.length<6||newState.sum<6){
            for(var i=0;i<newState.onePrice.length;i++){
                if(newState.onePrice[i].price!=action.item.price){
                    newState.onePrice.push({
                        price:newState.price[action.item.price],
                        num:1
                    })
                    return newState;
                }else{
                    newState.onePrice[i].num+=1;
                    return newState;
                }
            }
        }
    }
    if(action.type==='REDUCE'){
        let newState = JSON.parse(JSON.stringify(state));
        if(newState.onePrice.length>0){
            newState.total-=newState.onePrice[action.index];
            newState.onePrice.splice(action.index, 1);
            return newState;
        }
    }
    if(action.type==='SHOW'){
        if(sid.style.display==='block'){
            sid.style.display='none';
            show.className='icon icon-unie624';
        }else{
            sid.style.display='block';
            show.className='icon icon-Group-'
        }
    }
    return state
}


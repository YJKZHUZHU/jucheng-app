
import{ADD_MORE,DEFAULT_INFO,CHANGE_NAVNUM,INIT_LIST,NO_MORE} from './actionTypes'

const defaultState = {
    navNum:0,
    slTopBar:[
        {
            tit:'全部',
            caid: '' 
        },
        {
            tit:'演唱会',
            caid: '35'
        },
        {
            tit:'音乐会',
            caid:'36'
        },
        {
            tit:'话剧歌剧',
            caid:'37'
        },
        {
            tit:'儿童亲子',
            caid:'38'
        },
        {
            tit:'音乐剧',
            caid:'79'
        },
        {
            tit:'舞蹈芭蕾',
            caid:'86'
        },
        {
            tit:'戏曲综艺',
            caid:'91'
        },
        {
            tit:'展览',
            caid:'99'
        }
    ],
    pageNum: 1,
    total: 20,
    goodList: [],
    txt: '加载更多',
    cid: '',
    city_id: '',
}

export default (state = defaultState,action) =>{

    if(action.type ===  CHANGE_NAVNUM){
        let newState = Object.assign({},state);
        newState.navNum = action.num;
        return newState;
    }
    if (action.type === INIT_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.goodList = action.list;
        newState.total = action.total;
        newState.txt = action.txt;
        newState.cid = action.caid;
        newState.pageNum = 1
        return newState;
    }

    if(action.type === ADD_MORE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.goodList = state.goodList.concat(action.list);
        newState.pageNum = action.page
        return newState;
    }
    if(action.type === NO_MORE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.txt = '暂无更多'
        return newState
    }

    if(action.type === DEFAULT_INFO){
        let newState = Object.assign({},state);
        newState.goodList = action.data
        newState.total = action.total
        return newState
    }

    return state
}
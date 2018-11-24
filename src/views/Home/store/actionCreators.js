import axios from 'axios';


export const getList = (list) => {
    return {
        type: 'GET_BANNER',
        bannerList:list
    }
}


export const getBannerList = () => {

    return (dispatch, getState) => {

        var params = new URLSearchParams();
            params.append('confType', 'L');  
            params.append('isSymbol', '1');
            params.append('limit', '6')
        axios({
            method: 'post',
            url:'https://bird.ioliu.cn/v1/?url=https://m.juooo.com/index/getNationalSildeList',
            data: params
        }).then((res)=>{
            // console.log(res)
            dispatch(getList(res.data));
        })

    }
}


export const getShow = (list) => {
    return {
        type: 'GET_SHOW',
        showList:list
    }
}


export const getShowList = () => {

    return (dispatch, getState) => {

        axios({
            method: 'post',
            url:'https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Tour/ShowList'
        }).then((res)=>{
            // console.log(res)
            dispatch(getShow(res.data.data));
        })

    }
}


export const getHot = (list) => {
    return {
        type: 'GET_HOT',
        hotList:list
    }
}


export const getHotList = (id) => {

    return (dispatch, getState) => {

        var params = new URLSearchParams();
            params.append('city_id', id);  

        axios({
            method: 'post',
            url:'https://bird.ioliu.cn/v1/?url=https://m.juooo.com/index/hotsShowList',
            data:params
        }).then((res)=>{
            // console.log(res.data.data)
            dispatch(getHot(res.data.data));
        })

    }
}



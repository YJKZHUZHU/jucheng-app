import axios from 'axios';

export const getCity = (list) => {
    return {
        type: 'GET_CITY',
        cityList:list
    }
}


export const getCityList = (id) => {

    return (dispatch, getState) => {

        axios({
            method: 'get',
            url:'https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Index/getCityList',
        }).then((res)=>{
            // console.log(res.data.city_list)
            dispatch(getCity(res.data.city_list))
        })

    }
}
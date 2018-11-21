import axios from 'axios';
import { Toast } from 'antd-mobile'
var page = 0;
export const getMore = (list) => {
  return {
    type: 'GET_MORE',
    list: list
  }
}
export const get = (e) => {
  return (dispatch) => {
    page++;
    const api = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(api + 'https://m.juooo.com/tour/ShowList?page=' + page).then((result) => {
      console.log(result.data.data.length === 0)
      if (result.data.data.length === 0){
        const noMore = document.getElementById('noMore')
        noMore.innerHTML = '没有更多了'
        Toast.info('没有更多了', 1);
      }else {
        Toast.loading('请稍等...', 1, () => {
          console.log('加载成功');
        });
        console.log(result.data.data);
        dispatch(getMore(result.data.data));
      }
    })
  }
}



import async from 'async'
import axios from 'axios';

export const getAdd = (address,city_id) => {
  return {
    type: 'GET_ADDRESS',
    address,
    city_id
  }
}

export const getAddress = () => {

  return (dispatch, getState) => {

    async.series({
      one:function(cb){
        axios.get('http://restapi.amap.com/v3/ip?key=70d960826e73cce8f1cbc2038bd591ca')
        .then(res => {
          // dispatch(getAdd(res.data.city));
          var address = res.data.city;
          cb(null,address)
        })
      },
      two:function(cb) {
        axios.get('https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Index/getCityList')
        .then(res => {
          var arr = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','S','Y','Z'];
          var str = res.data.city_list;
          var allcity = [];
          for(var i = 0; i < arr.length; i++){
            var code = arr[i];
            var list = str[code].lists;
            for(var j = 0; j < list.length; j++){
              allcity.push(list[j]);
            }
          }
          cb(null,allcity)
        })
      }
      }, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          var city_name = result.one.split('').slice(0,2).join('');
          var city_id = 0;
          for(var i = 0; i < result.two.length; i++){
            if(result.two[i].name == city_name){
              city_id = result.two[i].id;
            }
          }
          dispatch(getAdd(result.one,city_id));
        }
    });


  }
}


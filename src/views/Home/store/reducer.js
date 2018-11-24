const defaultState = {
  bannerList:[1,2,3],
  imgHeight: 160,
  tagList: [
    {img_url:'http://image.juooo.com/group1/M00/01/AF/rAoKmVvo2QuARfUgAAAZVrHX6Vg901.png',title:'演唱会',href:'/'},
    {img_url:'http://image.juooo.com/group1/M00/02/59/rAoKNVvo2RWAZ4RrAAAqgMt_hEM195.png',title:'音乐会',href:'/'},
    {img_url:'http://image.juooo.com/group1/M00/01/AF/rAoKmVvo2R2AfAI7AAAqv8R6CX0470.png',title:'舞台剧',href:'/'},
    {img_url:'http://image.juooo.com/group1/M00/02/59/rAoKNVvo2SmAOP2NAAAkgcvLRNA615.png',title:'音乐剧',href:'/'},
    {img_url:'http://image.juooo.com/group1/M00/01/AF/rAoKmVvo2TOAe_AqAAAmm6GZ4Xo145.png',title:'儿童',href:'/'}
  ],
  areaList: [
    {img_url:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png',title:'演出日历',href:'/'},
    {img_url:'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png',title:'聚特惠',href:'/'},
    {img_url:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png',title:'学生专区',href:'/'},
    {img_url:'http://image.juooo.com/group1/M00/02/59/rAoKNVvpE6yALBlLAAA5L1UVFII012.png',title:'欢聚橙卡',href:'/'}
  ],
  showList:[1],
  showCityName:[],
  hotList:[],
  changeClass:true

}

export default (state = defaultState, action) => {
  
  if (action.type === 'GET_BANNER') {

    let newState = JSON.parse(JSON.stringify(state))

    newState.bannerList = action.bannerList.data;

    return newState;
  }

  if (action.type === 'GET_SHOW') {

    let newState = JSON.parse(JSON.stringify(state))

    newState.showList = action.showList;

    return newState;
  }

  if (action.type === 'GET_HOT') {

    let newState = JSON.parse(JSON.stringify(state))

    newState.hotList = action.hotList;
    
    // console.log(action.showList)

    return newState;
  }

  if(action.type === 'CHANGECLASS'){
    let newState = JSON.parse(JSON.stringify(state))

    newState.changeClass = !newState.changeClass;
  
    return newState;
  }

  return state;
}



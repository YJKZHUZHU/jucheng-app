const defaultDate = {
  title: '巡回演出',
  list: [],
  pageindex: 1,
  flag: true,
  home: '首页',
  my: '我的聚橙',
  more: '点击加载更多'
}
export default (state = defaultDate, action) => {
  if (action.type === 'SHOW_BOX') {
  }
  if (action.type === 'GET_MORE') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = newState.list.concat(action.list);
    return newState;
  }
  return state
}

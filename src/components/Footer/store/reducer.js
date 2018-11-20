const defaultState = {
  address: '定位中...',
  city_id:0
}

export default (state = defaultState, action) => {

  if (action.type === 'GET_ADDRESS') {

    let newState = JSON.parse(JSON.stringify(state))

    newState.address = action.address;
    newState.city_id = action.city_id;

    return newState;
  }

  return state;
}

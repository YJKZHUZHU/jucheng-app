const defaultState = {
  address: '',
  city_id:0
}

export default (state = defaultState, action) => {

  // console.log(state, action);
  if (action.type === '1111') {

    let newState = JSON.parse(JSON.stringify(state))

    newState.address = action.address;
    // console.log(newState.address,action.address)
    return newState;
  }

  return state;
}



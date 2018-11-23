const defaultState = {
    cityListA:[],
    cityListB:[],
    cityListC:[],
    cityListD:[],
    cityListE:[],
    cityListF:[],
    cityListG:[],
    cityListH:[],
    cityListJ:[],
    cityListK:[],
    cityListL:[],
    cityListM:[],
    cityListN:[],
    cityListP:[],
    cityListQ:[],
    cityListR:[],
    cityListS:[],
    cityListT:[],
    cityListW:[],
    cityListX:[],
    cityListY:[],
    cityListZ:[]
}

export default (state = defaultState, action) => {
  
    if (action.type === 'GET_CITY') {
  
      let newState = JSON.parse(JSON.stringify(state))
  
      newState.cityListA = action.cityList.A.lists;
      newState.cityListB = action.cityList.B.lists;
      newState.cityListC = action.cityList.C.lists;
      newState.cityListD = action.cityList.D.lists;
      newState.cityListE = action.cityList.E.lists;
      newState.cityListF = action.cityList.F.lists;
      newState.cityListG = action.cityList.G.lists;
      newState.cityListH = action.cityList.H.lists;
      newState.cityListJ = action.cityList.J.lists;
      newState.cityListK = action.cityList.K.lists;
      newState.cityListL = action.cityList.L.lists;
      newState.cityListM = action.cityList.M.lists;
      newState.cityListN = action.cityList.N.lists;
      newState.cityListP = action.cityList.P.lists;
      newState.cityListQ = action.cityList.Q.lists;
      newState.cityListR = action.cityList.R.lists;
      newState.cityListS = action.cityList.S.lists;
      newState.cityListT = action.cityList.T.lists;
      newState.cityListW = action.cityList.W.lists;
      newState.cityListX = action.cityList.X.lists;
      newState.cityListY = action.cityList.Y.lists;
      newState.cityListZ = action.cityList.Z.lists;
  
      console.log(newState)

      return newState;
    }
  
    return state;
  }
  
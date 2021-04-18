import { HOME_DATA } from "./constants";

const initState = {
  name: 'lxjjjjjj',
  homeData: {},
}

export default function(state = initState, action = {}) {
  switch(action.type){
    case HOME_DATA:
      return {
        ...state,
        homeData: action.payload
      }
    default:
      return state
  }
}
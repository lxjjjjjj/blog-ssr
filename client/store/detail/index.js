import { DETAIL_DATA } from "./constants";

const initState = {
  name: 'lxjjjjjj',
  detailData: {},
}

export default function(state = initState, action = {}) {
  switch(action.type){
    case DETAIL_DATA:
      return {
        ...state,
        detailData: action.payload
      }
    default:
      return state
  }
}
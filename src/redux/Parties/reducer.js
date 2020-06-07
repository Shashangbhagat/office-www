import { SET_PARTIES } from './types'


const initialState = [
  {
    type: "1",
    name: "New World",
    total_cost: 900
  },
  {
    type: "1",
    name: "New Infotech",
    total_cost: 5000
  },
  {
    type: "1",
    name: "Star connections",
    total_cost: 23200
  }
]
function parties(state = initialState, action) {
  switch (action.type) {
    case SET_PARTIES:
      return state;
    default:
      return state;
  }
}

export default parties;
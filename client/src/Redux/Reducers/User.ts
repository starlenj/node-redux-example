import { UserAction } from "../Action/User"

type UserState = {
  Users: string[],
  User: string[]
}
const initialState = {
  Users: [],
  User: []
}
const UserReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "GET_USERS_LIST":
      return {
        ...state,
        Users: action.payload
      }
      break;
    case "SET_SELECT_USER":
      return {
        ...state,
        User: action.payload
      }
    default:
      return state;

  }
}

export { UserReducer }

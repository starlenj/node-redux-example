import { Dispatch } from "react";

export interface UserModel {
  name: string,
  email: string,
  username: string,
  street: string,
  city: string
}

export interface GetUsersListAction {
  readonly type: "GET_USERS_LIST",
  payload: String[]
}
export interface SetUserAction {
  readonly type: "SET_SELECT_USER",
  payload: String[]
}
export type UserAction = GetUsersListAction | SetUserAction;
export const GetUserList = () => {

  return async (dispatch: Dispatch<GetUsersListAction>) => {
    const UserReponse = await fetch("http://localhost:3000/users");
    const UsersList = await UserReponse.json();
    dispatch({ type: "GET_USERS_LIST", payload: UsersList.Users });

  }
}
export const SetSelectUser = (data: any) => {
  return async (dispatch: Dispatch<SetUserAction>) => {
    dispatch({ type: "SET_SELECT_USER", payload: data })
  }
}


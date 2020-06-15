import { createStore } from "redux";
import { IAction, IState } from "./types";
const INITIAL_STATE: IState = { users: [] };
function reducer(state = INITIAL_STATE, action: IAction): IState {
  if (action.type === "Add_User") {
    return { users: [...state.users, action.value] };
  }
  if (action.type === "Update_Users") {
    return { users: action.value };
  }
  return state;
}
const store = createStore(reducer);

export default store;

import { IAction, IUser } from "./types";

export const AddUser = (value: IUser): IAction => {
  return {
    type: "Add_User",
    value,
  };
};

export const UpdateUsers = (value: IUser[]): IAction => {
    return {
      type: "Update_Users",
      value,
    };
  };

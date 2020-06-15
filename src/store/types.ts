export interface IAction {
  type: String;
  value: any;
}
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  birth: string;
  phoneNumber: string;
}
export interface IState {
    users: Array<IUser>
}
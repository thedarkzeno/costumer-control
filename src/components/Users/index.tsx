import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IState, IUser } from "../../store/types";
import { Block, Card, Input } from "../../styles";
import { UpdateUsers } from "../../store/actions";
function Users() {
  const [state, setState] = useState({
    search: "",
  });
  const dispatch = useDispatch();
  const selector = useSelector((state: IState) => state);
  function handleChange(value: string) {
    setState({ search: value });
  }
  function handleDelete(index: number) {
    var users: IUser[] = selector.users;
    users.splice(index, 1);
    dispatch(UpdateUsers(users));
  }
  function displayUsers() {
    if (state.search !== "") {
      var u = selector.users.find(
        (a) =>
          a.firstName.toLowerCase().includes(state.search) ||
          a.lastName.toLowerCase().includes(state.search)
      )!;
      if (u !== undefined) {
        var user: IUser = u!;
        var index: number = selector.users.findIndex((U) => U.id === user.id);
        return (
          <Card>
            <div>First Name: {user.firstName}</div>
            <div>Last Name: {user.lastName}</div>
            <div>Birth: {user.birth}</div>
            <div>Phone Number: {user.phoneNumber}</div>
            <Link to={`/edit/${index}`}>
              <button>edit</button>
            </Link>
            <button onClick={() => handleDelete(index)}>delete</button>
          </Card>
        );
      }
    }

    return selector.users.map((user, index) => (
      <Card key={index}>
        <div>First Name: {user.firstName}</div>
        <div>Last Name: {user.lastName}</div>
        <div>Birth: {user.birth}</div>
        <div>Phone Number: {user.phoneNumber}</div>
        <Link to={`/edit/${index}`}>
          <button>edit</button>
        </Link>
        <button onClick={() => handleDelete(index)}>delete</button>
      </Card>
    ));
  }

  return (
    <div>
      <Block>
        <Input
          value={state.search}
          onChange={(e) => handleChange(e.target.value)}
        />
        {displayUsers()}
      </Block>
    </div>
  );
}
export default Users;

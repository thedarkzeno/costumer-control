import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddUser } from "../../store/actions";
import { IUser } from "../../store/types";
import { Input, Block, Button } from "../../styles";
function AddUsers() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    id: Date.now().toString(),
    firstName: "",
    lastName: "",
    birth: "",
    phoneNumber: "",
  });

  function createUser(): IUser {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      birth: user.birth,
      phoneNumber: user.phoneNumber,
    };
  }
  function addUser() {
    const u = createUser();
    dispatch(AddUser(u));
    history.push("/")
  }
  function handleChange(e: string, n: string) {
    setUser((prevState) => ({ ...prevState, [e]: n }));
  }

  return (
    <div>
      <Block>
        <div>
          <label>First Name</label>
          <Input
            value={user.firstName}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            id="firstName"
            type="text"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Input
            value={user.lastName}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            id="lastName"
            type="text"
          />
        </div>
        <div>
          <label>Birth Date</label>
          <Input
            value={user.birth}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            id="birth"
            type="date"
          />
        </div>
        <div>
          <label>Phone Number</label>
          <Input
            value={user.phoneNumber}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            id="phoneNumber"
            type="number"
          />
        </div>
        <Button onClick={addUser}>Add new costumer</Button>
      </Block>
    </div>
  );
}
export default AddUsers;

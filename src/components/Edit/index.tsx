import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { UpdateUsers } from "../../store/actions";
import { IUser, IState } from "../../store/types";
import { Input, Block, Button } from "../../styles";
function Edit() {
  const dispatch = useDispatch();
  const selector = useSelector((state: IState) => state);
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    birth: "",
    phoneNumber: "",
  });
  useEffect(() => {
    setUser({
      id: selector.users[id].id,
      firstName: selector.users[id].firstName,
      lastName: selector.users[id].lastName,
      birth: selector.users[id].birth,
      phoneNumber: selector.users[id].phoneNumber,
    });
  }, [id, selector]);
  function createUser(): IUser {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      birth: user.birth,
      phoneNumber: user.phoneNumber,
    };
  }
  function editUser() {
    const u = createUser();
    var allUsers = selector.users;
    selector.users[id] = u;
    dispatch(UpdateUsers(allUsers));
    history.push("/");
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
        <Button onClick={editUser}>Edit costumer</Button>
      </Block>
    </div>
  );
}
export default Edit;

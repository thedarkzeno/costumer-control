import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../styles";
export default function Header_() {
  return (
    <Header>
      <div>
        <Link to="/">Home</Link>
      </div>
      
      <div>
        <Link to="/add">Add Users</Link>
      </div>
    </Header>
  );
}

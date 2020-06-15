import React from "react";
import { Link } from "react-router-dom";
import { Header, HButton } from "../../styles";
export default function Header_() {
  return (
    <Header>
      <div>
        <Link to="/"><HButton>Home</HButton></Link>
      </div>
      
      <div>
        <Link to="/add"><HButton>Add Costumer</HButton></Link>
      </div>
    </Header>
  );
}

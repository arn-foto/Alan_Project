import React from "react";
import Sidebar from "../Sidebar";
import { BodyStyle } from "./style";

function Body() {
  return (
    <BodyStyle>
      <Sidebar />I am the body
    </BodyStyle>
  );
}

export default Body;

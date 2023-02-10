import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        {/* <img
          src={Home}
          alt=""
          style={{ backgroundColor: "#512cf5", color: "#512cf5" }}
        /> */}
        <div
          style={{
            backgroundColor: "#512cf5",
            color: "#512cf5",
            width: "30px",
            height: "30px",
          }}
        ></div>
      </Link>
      <UilSetting />
      <img src={Noti} alt="" />
      {/* <Link to="../chat">
        <img src={Comment} alt="" />
      </Link> */}
    </div>
  );
};

export default NavIcons;

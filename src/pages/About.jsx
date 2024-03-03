import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul style={{ listStyle: "none", paddingInlineStart: 0 }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

import React from "react";

export default function Top() {
  return (
    <div className="top_section">
      <span className="ek-logo">Erez Katsman</span>
      <div className="icons">
        <a href="https://github.com/ErezKatsman">
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/erez-katsman-093704209/">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:someone@example.com">
          <i className="fa fa-envelope fa-2x"></i>
        </a>
        <a href="https://www.freecodecamp.org/erezkatsman">
          <i className="fa fa-free-code-camp fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <span className="ek-logo">Erez Katsman</span>
      <div className="icons">
        <a href="https://github.com/ErezKatsman">
          <i class="fa fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/erez-katsman-093704209/">
          <i class="fa fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:someone@example.com">
          <i class="fa fa-envelope fa-2x"></i>
        </a>
        <a href="https://www.freecodecamp.org/erezkatsman">
          <i class="fa fa-free-code-camp fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

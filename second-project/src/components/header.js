import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <h1>Site Name</h1>
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  </header>
)

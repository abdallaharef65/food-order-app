import { Outlet, Link } from "react-router-dom";
import img from "../assets/images/ali-inay-y3aP9oo9Pjc-unsplash.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg ">
        <div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default NavBar;

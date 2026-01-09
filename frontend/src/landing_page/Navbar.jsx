import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";

function Navbar() {
  const navigate = useNavigate();
  const { user, loading, fetchUser } = useContext(AuthContext);

  if (loading) {
  return (
    <div className="p-3 text-center">
      Loading...
    </div>
    );
  }

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8000/logout");
      toast.success(res.data.message);
      await fetchUser();          //  update auth state
      navigate("/");
    } catch (err) {
      toast.error("Error logging out");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="LOGO" style={{ width: "25%" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}

            {user && (
              <>
                <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://localhost:5174"
                    >
                      Dashboard
                    </a>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


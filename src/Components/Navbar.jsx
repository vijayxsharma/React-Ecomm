import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { handleInpVal } from "../Utility/Productslice";
import Button from "react-bootstrap/esm/Button";
import { openModalForm } from "../Utility/UserSlice";
const Navbar = () => {
  const {is_User} = useSelector((state)=>state.UserSlice)
  const location = useLocation()
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg bg-primary data-bs-theme">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          {!is_User && (
            <div className="mx-2">
            <Button variant="warning" onClick={()=>dispatch(openModalForm({show:true, formType:"Add"}))}>
                    SignUp
            </Button>
          </div>
          )}
          <form className={`d-${location.pathname == "/" ? "block" : "none" }  d-flex`} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success"
            type="button"
            onChange={(e)=>dispatch(handleInpVal(e.target.value))}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

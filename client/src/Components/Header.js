import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Features/UserSlice";
import {Navbar,Nav,NavItem,NavLink} from "reactstrap";
import "../App.css";

const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

const handlelogout = async () => {
  dispatch(logout());
  //ensure that the state update from the logout action has been processed before proceeding to the next step.
  await new Promise((resolve) => setTimeout(resolve, 100));
  navigate("/login"); //redirect to login page route.
};

  return (
    <>
    <Navbar className="header">
        <Nav>
        <NavItem>
            <NavLink active href="#">
              <img src={logo}/>
              </NavLink>
          </NavItem>
          <NavItem>
            <Link to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
          <Link to="/Profile">
               Profile
            </Link>
          </NavItem>
          <NavItem>
          <Link to="/Logout" onClick={handlelogout}>
               Logout
            </Link>
          </NavItem>
        </Nav>
      </Navbar>

    </>


  );
};

export default Header;

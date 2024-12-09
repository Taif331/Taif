import { Container } from "reactstrap";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import {Continer,Row ,Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const email = useSelector((state) => state.users.user.email);
  return (
    <>
    <Container>
      <Router>
      <Row>
          {email ? (
            <>
              <Header />
            </>
          ) : null}
        </Row>

      <Row className="main">
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/register" element={<Register />}></Route>
      </Routes>
      </Row>
      <Row>
          {email ? (
            <>
              <Footer />
            </>
          ) : null}
        </Row>

      </Router>
    </Container>
    </>
  );
};

export default App;

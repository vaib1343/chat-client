import "./style.css";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    // <div className="header">
    //   <header className="App-header">
    //     <p>Simple room chat App</p>
    //     <div className="buttons">
    //       <Button
    //         variant="contained"
    //         color="primary"
    //         component={Link}
    //         to="/login"
    //       >
    //         Login
    //       </Button>
    //       <Button
    //         variant="contained"
    //         color="secondary"
    //         component={Link}
    //         to="/register"
    //       >
    //         Sign Up
    //       </Button>
    //     </div>
    //   </header>
    // </div>
    <div className="home-container">
      <div className="image">
        <img
          style={{ height: "100%", width: "100%" }}
          src="/images/home.jpg"
          alt="chat"
        />
      </div>
      <div className="text">
        <h1>chat</h1>
        <h1>with</h1>
        <h1>randoms</h1>
        <div className="btn-container">
          <button
            className="btn-register"
            onClick={() => history.push("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

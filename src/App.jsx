import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import user from "./components/user";
import about from "./components/about";
import Add from "./components/Add";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          CRUD 
        </a>

        <Link to="" />
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/xyz"} className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link> 
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/abc"]} component={about} />
          <Route path={"/xyz"} component={user} />
          <Route  path="/add" component={Add} /> 

          {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
          {/* <Route exact path="/add" component={AddTutorial} /> */}
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;

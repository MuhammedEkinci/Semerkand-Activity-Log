import React from  "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from './pages/Admin';
import Login from './pages/Login';
import PrivateRoute from "./components/PrivateRoute";
import {AuthContext} from "./context/auth";

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
        </Router>
    </div>
  );
}

export default App;

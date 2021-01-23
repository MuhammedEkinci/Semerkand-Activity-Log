import React from  "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;

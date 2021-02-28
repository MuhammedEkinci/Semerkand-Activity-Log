import React from  "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from './pages/Admin';
import Login from './pages/Login';
import PrivateRoute from "./components/PrivateRoute";
import {AuthContext} from "./context/auth";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
          </Router>
      </Provider>
    </div>
  );
}

export default App;

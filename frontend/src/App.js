import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import owlBackground from "./img/owl5.png";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="home-container">
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <img src={owlBackground} alt="owl" className="background-img"/>
              {/* <div className="title"><h1>NIGHT OWL</h1></div> */}
            </Route>
            <Route path="/register">
              <img src={owlBackground} alt="owl" className="background-img"/>
              {/* <div className="title"><h1>NIGHT OWL</h1></div> */}
              <SignupFormPage />
            </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;

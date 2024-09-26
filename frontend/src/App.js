import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/profil/Profile";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Quiz from "./pages/Quiz";
import ChatPageAWS from "./pages/chatPageAWS";
import ChatPageAzure from "./pages/chatPageAzure";
import ChatPageLinux from "./pages/chatPageLinux";
import HowToStart from "./pages/HowToStart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} logout={logout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login">
          {isAuthenticated ? (
            <Redirect to="/profile" />
          ) : (
            <LoginForm setAuth={setIsAuthenticated} />
          )}
        </Route>
        <Route path="/register">
          {isAuthenticated ? (
            <Redirect to="/profile" />
          ) : (
            <RegisterForm setAuth={setIsAuthenticated} />
          )}
        </Route>
        <Route path="/profile">
          {isAuthenticated ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route path="/quiz">
          {isAuthenticated ? <Quiz /> : <Redirect to="/login" />}
        </Route>
        <Route path="/chat/aws">
          {isAuthenticated ? <ChatPageAWS /> : <Redirect to="/login" />}
        </Route>
        <Route path="/chat/azure">
          {isAuthenticated ? <ChatPageAzure /> : <Redirect to="/login" />}
        </Route>
        <Route path="/chat/linux">
          {isAuthenticated ? <ChatPageLinux /> : <Redirect to="/login" />}
        </Route>
        <Route path="/how-to-start" component={HowToStart} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import ChatPageAWS from "./pages/chatPageAWS";
import ChatPageAzure from "./pages/chatPageAzure";
import ChatPageLinux from "./pages/chatPageLinux";
import HowToStart from "./pages/HowToStart";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/chat/aws" component={ChatPageAWS} />
        <Route path="/chat/azure" component={ChatPageAzure} />
        <Route path="/chat/linux" component={ChatPageLinux} />
        <Route path="/how-to-start" component={HowToStart} />
      </Switch>
    </Router>
  );
}

export default App;

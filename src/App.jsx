import React from "react";
import About from "./components/About";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Cards";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Card} />
      </Switch>
    </>
  );
}

export default App;

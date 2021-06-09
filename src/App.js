import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChooseYourMs from "./components/ChooseYourMs";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (

      <Router>
        <Header />

        <Route path="/" exact>
          <Hero />
          <ChooseYourMs />
        </Route>

      </Router>
  );
}

export default App;

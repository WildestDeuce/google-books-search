import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import BookSearch from "./pages/BookSearch/BookSearch";
import BookSaved from "./pages/BookSaved/BookSaved";
import Results from "./components/Results/Results";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/saved" component={BookSaved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// set up the pages by using routes to grab components
// import header.css
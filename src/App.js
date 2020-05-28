import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import ListingScreen from "./ListingScreen";
import ItemDetail from "./ItemDetail";
import NewItem from "./NewItem";
import "./styles.css";

const App = () => (
  <Router>
    <div className="container">
      <div className="main-container">
        <Navigation />
        <Switch>
          <Route path="/" exact component={ListingScreen} />
          <Route
            path="/detail/:itemId"
            component={props => {
              return <ItemDetail itemId={props.match.params.itemId} />;
            }}
          />
          <Route path="/new" exact component={NewItem} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;

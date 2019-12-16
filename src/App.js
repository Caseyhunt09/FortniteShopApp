import React from 'react';
import DataTable from './components/datatable/DataTable.js';
import Nav from './components/Nav';
import About from './components/About.js';
import Shop from './components/Shop.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail.js';
import Button from './Button';
import styles from './appStyles.module.css';
import './index.css';

function App () {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
        </div>
      </Router>
);
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;

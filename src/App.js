import React from 'react';
import Login from './components/Login';
import BlogPage from './components/BlogPage';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';





const App =()=>{
  return(
    <div>
      <Router>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Switch>
          <Route path="/bloglist">
            <BlogPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App





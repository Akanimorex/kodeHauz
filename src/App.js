import React from 'react';
import Login from './components/Login';
import BlogPage from './components/BlogPage';
import SingleBlog from './components/SingleBlog';
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
          <Route path="/blogpost/:id" component={SingleBlog}/>
        
          
        </Switch>
      </Router>
    </div>
  )
}

export default App





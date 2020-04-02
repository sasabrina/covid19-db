import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Infected, Countries, Home } from './pages/index'
import { Footer } from './components/index'
import './App.scss'

const App = () => {
  return (
      <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/infected' component={Infected}/>
        <Route exact path='/countries' component={Countries}/>
        <Footer/>
      </Router>    
  );
}

export default App;

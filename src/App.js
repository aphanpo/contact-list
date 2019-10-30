import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import Users from './Users'
import Home from './Home'
import Contacts from './Contacts'

function App() {
  return (
    <Router>
      <div id="container">
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/contacts/:id" component={Contacts} />
        </main>
      </div>
    </Router>
  )
}

export default App;

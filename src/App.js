import React, { useState } from 'react';
import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import ReadNow from './Components/readNow/ReadNow';
import PrivateRoute from './Components/PrivateRoute';


export default function App() {
  const [myFilters, setMyFilters] = useState({})
  const passFilterToApp = (filterObject) => {
    setMyFilters(filterObject)
  }
  return (
    <div className="appBody">
      <Router>
        <Header token={localStorage.getItem('token')} passFilterToApp={passFilterToApp} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" render={() => localStorage.getItem('token') ? <Dashboard filterChoice={myFilters} /> : <Redirect to="/login" />} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/readnow" component={ReadNow} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert'
import Groups from './components/groups/Groups'
import setAuthToken from './utils/setAuthToken'
import {loadUser} from './actions/auth'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const  App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing}/>
          <section>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/groups' component={Groups}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
)}

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert'

const  App = () => 
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

        </Switch>
      </section>
    </Fragment>
  </Router>
</Provider>

export default App;

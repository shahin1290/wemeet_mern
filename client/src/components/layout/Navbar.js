import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logout } from '../../actions/auth'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold'
  }
};

function ButtonAppBar({ classes, auth: { isAuthenticated, loading }, logout}) { 
  let signUpLink, logInLink, logOutLink, createGroupLink, profileLink

  if(!loading && isAuthenticated ){
    createGroupLink =  <Button  color="inherit">Create a Group</Button>
    profileLink = <Button color="inherit">Profile</Button>
    logOutLink =  <Button onClick={logout} color="inherit">LogOut</Button>
  }else {
    signUpLink =  <Button component={Link} to="/register" color="inherit">SignUp</Button>;
    logInLink =  <Button component={Link} to="/login" color="inherit">LogIn</Button>
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.grow} >
            <Link to="/" className={classes.icon}>WeMeet</Link>
          </Typography>
          { signUpLink }
          { logInLink }
          { createGroupLink }
          { logOutLink }
          { profileLink }         
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
})

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


export default connect(mapStateToProps, { logout })(withStyles(styles)(ButtonAppBar));
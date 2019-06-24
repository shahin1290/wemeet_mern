import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import  SimpleCard  from "./FutureEventCard";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const GroupItem = ({ classes, group: {name, description, date, location, user, event}, auth}) => {
  return (
    <div>
      <div className={classes.header}>
          <div className={classes.row}>
            <div className={classes.column}>
              <img src="../assets/images/graduation.jpg" className={classes.image} />
            </div>
              <div className={classes.column}>
                <h1>{name}</h1>
                <p>Organized by: <span className={classes.emphasis}>organizerName</span></p>
                <p>Group in: <span className={classes.emphasis}>{location}</span></p>
                <p>Members</p>

                <Button className={ classes.joinGroup}>Join this group</Button>
              </div>
          </div>
          
          {!auth.loading && user === auth.user._id && (
            <Button component={Link} to={`/groups/${name}/create-event`}>Create event</Button> 
          )}


          <Button>Message group</Button>
        </div>

        {/* ----------GROUP BODY----------------- */}

        <div style={{ backgroundColor: "#f6f7f8" }}>

          <div>
            <h2 style={{ fontSize: "2rem", marginLeft: "9rem", marginTop: "2rem" }}>Description</h2>
            <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>{description}</p>

            <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
              <h2 style={{ textAlign: 'center'}}>Future events</h2>
              {event.map(event => 
              <SimpleCard >
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>{event.location}</p>
                <p>{event.date}</p>
              </SimpleCard>
              )}
            </div>
          </div>    
        </div>  
    </div>
  );
};

GroupItem.propTypes = {
  classes: PropTypes.object.isRequired,
  group: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}


const styles = {
  header: { height:"400px", borderBottom: "1px solid rgba(0,0,0,.12)" },
  row: { display:'flex' },
  column: { flex: '50%'},
  image: {
    height: "300px",
    border: "1px solid rgba(0,0,0,.12)",
    borderRadius: "30px",
    marginTop: "15px",
    marginLeft: "200px"
  },
  memberList: {
    display: 'grid',
    "grid-template-columns": "100px 100px 100px",
    "grid-gap": "10px"
,   "background-color": "#fff",
    color: "#444"
  },
  joinGroup: {
    marginTop: "30px",
    backgroundColor: "#5AC0D8"
  },
  emphasis: {
    color: "#5AC0D8",
    fontWeight: 'bold'
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(withStyles(styles)(GroupItem));
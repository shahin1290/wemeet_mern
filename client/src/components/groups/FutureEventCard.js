import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const styles = {
  card: {
    maxWidth: 650,
    marginBottom: 12,
    margin:' 0 auto'
  }
};

function SimpleCard(props) {
  const { classes } = props;
  

  return (
    <Card className={classes.card}>
      <CardContent>
        { props.children }
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to= {`/events/${props.event}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
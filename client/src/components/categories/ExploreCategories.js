import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

class ExploreCategories extends Component {
  render() {
    let categories = ["Outdoors & Adventure", "Tech", "Family", "Health & Wellness", "Sports & Fitness", "Learning",
  "photography", "Food & Drink", "Music", "Film", "Arts", "Others"];
    const { classes } = this.props;
    let categoriesList = categories.map(category => {
      return (
        <Card className={classes.card}>
          <CardActionArea component={Link} to={{pathname: `/categories/${category.id}`, state: {category}}}>
            <CardMedia
              className={classes.media}
              image={`./assets/images/${category.toLowerCase()}.png`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {category}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        
      )
    });

    return (
      <div>
        <h1 className={classes.heading}>Explore by categories</h1>
        <div className={classes.root}>
          {categoriesList}
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    'grid-gap': '30px',
    'align-items': 'stretch'
  },
  heading:{
    maxWidth: '1000px',
    margin: '50px auto',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};



CardMedia.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExploreCategories);
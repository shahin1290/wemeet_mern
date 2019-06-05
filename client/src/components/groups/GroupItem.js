import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const GroupItem = ({auth, group: {name, description, date, location, user}}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>{user}</p>
    </div>
  );
};

GroupItem.propTypes = {
  group: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(GroupItem);
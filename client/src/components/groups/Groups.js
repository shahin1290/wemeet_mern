import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getGroups } from '../../actions/group'
import GroupItem from './GroupItem'

const Groups = ({ getGroups, group: { groups, loading }}) => {
  useEffect(() => {
    getGroups()
  }, [getGroups])
  return (
    <div>
      { groups.map(group => (
        <GroupItem key={group._id} group={group}/>
      ))}
    </div>
  );
}


Groups.propTypes = {
  getGroups: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  group: state.group
})

export default connect(mapStateToProps, { getGroups }) (Groups);
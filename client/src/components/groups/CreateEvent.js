import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import  Button  from "@material-ui/core/Button";


class CreateEvent extends Component {
  renderError({ error, touched }){
    if(touched && error){
      return (
        <div style={{ color: "red" }}>{error}</div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <TextField {...input} 
          autoComplete="off"
          id="outlined-with-placeholder"
          label={label}
          placeholder={label}
          margin="normal"
          variant="outlined"
          fullWidth
          />
        {this.renderError(meta)}
      </div>
    )
  }

  renderTextarea = ({ input, label, meta }) => {
    return (
      <div>
        <TextField {...input} 
          autoComplete="off"
          id="filled-multiline-static"
          label={label}
          multiline
          fullWidth
          rows="10"
          placeholder={label}
          defaultValue="Default Value"
          margin="normal"
          variant="outlined"
          />
        {this.renderError(meta)}
      </div>
    )
  }

  renderSelectOptions = ({ input, label, meta, children }) => {
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
          native
          {...input}
          inputProps={{
            name: 'age',
            id: 'age-native-simple'
          }}
        >
          {children}
        </Select>
        {this.renderError(meta)}
      </FormControl>
    )
  }

  onFormSubmit = (formValues) => {
    const groupName = this.props.match.params.name
    const event = {
      title: formValues.title,
      description: formValues.description,
      location: formValues.location,
      date: formValues.date
    }
    this.props.createEvent(event, groupName)

  }

  render() {
     return (
      <div style={{ width: "40%", border: "1px solid grey", margin: "25px auto", background: "white" }}>
      
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} style={{ width: "50%", margin: "0 auto" }}>       
      <h1>Create an Event</h1>
        <Field
          name="title"
          label="Event title"
          component={this.renderInput} />

        <Field
          name="description"
          label="Event Description"
          component={this.renderTextarea} />   

        <Field
          name="location"
          label="Event Location"
          component={this.renderInput} />

        <Field
          name="date"
          label="Event Date"
          component={this.renderInput} />
          
          
          <Button type="submit" variant="contained" color="primary" style = {{marginBottom: "25px"}} >Submit</Button>
      </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if(!formValues.title){
    errors.name = "You must enter the event title"
  }
  if(!formValues.description){
    errors.description = "You must enter a description"
  }
  if(!formValues.location){
    errors.location = "You must enter a location"
  }

  if(!formValues.date){
    errors.date = "You must enter a date"
  }
  return errors
}

const mapStateToProps = (state) => {
  return { 
    category: state.category
  }
}

const formWrapped = reduxForm({
  form: 'CreateEvent',
  validate
})(CreateEvent)

export default connect(mapStateToProps, { createEvent })(formWrapped);
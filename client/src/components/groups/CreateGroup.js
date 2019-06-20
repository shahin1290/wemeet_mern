import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/group';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import  Button  from "@material-ui/core/Button";


class CreateGroup extends Component {
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
    const group = {
      name: formValues.name,
      description: formValues.description,
      location: formValues.location,
      category_id: formValues.category_id
    }
    this.props.createGroup(group)

  }

  render() {
    let categoryOptions
    categoryOptions = this.props.category.categories.map(category => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      )
    })

     return (
      <div style={{ width: "40%", border: "1px solid grey", margin: "25px auto", background: "white" }}>
      
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} style={{ width: "50%", margin: "0 auto" }}>       
      <h1>Create a group</h1>
        <Field
          name="name"
          label="Group Name"
          component={this.renderInput} />

        <Field
          name="description"
          label="Group Description"
          component={this.renderTextarea} />   

        <Field
          name="category_id"
          label="Select a Category"
          component={this.renderSelectOptions} 
        >
          <option value="" />
          { categoryOptions }
        </Field>  

        <Field
          name="location"
          label="Group Location"
          component={this.renderInput} />
          
          <Button type="submit" variant="contained" color="primary" style = {{marginBottom: "25px"}} >Submit</Button>
      </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if(!formValues.name){
    errors.name = "You must enter the group name"
  }
  if(!formValues.description){
    errors.description = "You must enter a description"
  }
  if(!formValues.category_id){
    errors.category_id = "You must select a category"
  }
  if(!formValues.location){
    errors.location = "You must enter a location"
  }
  return errors
}

const mapStateToProps = (state) => {
  return { 
    category: state.category
  }
}

const formWrapped = reduxForm({
  form: 'CreateGroup',
  validate
})(CreateGroup)

export default connect(mapStateToProps, { createGroup })(formWrapped);
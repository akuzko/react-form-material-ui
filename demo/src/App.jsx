import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DemoForm from './DemoForm';

export default class App extends Component {
  state = {
    form: {}
  };

  validate = () => {
    this.refs.form.performValidation();
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DemoForm
            ref="form"
            attrs={this.state.form}
            onChange={(form) => this.setState({ form })}
            validateOnChange
          />
          <RaisedButton label="Validate" onTouchTap={this.validate} />
        </div>
      </MuiThemeProvider>
    );
  }
};

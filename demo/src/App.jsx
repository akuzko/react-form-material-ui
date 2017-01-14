import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoForm from './DemoForm';

export default class App extends Component {
  state = {
    form: {}
  };

  render() {
    return (
      <MuiThemeProvider>
        <DemoForm
          attrs={this.state.form}
          onChange={(form) => this.setState({ form })}
          validateOnChange
        />
      </MuiThemeProvider>
    );
  }
};

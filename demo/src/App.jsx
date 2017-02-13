import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoForm from './DemoForm';

export default class App extends Component {
  state = {
    form: {
      user: {}
    }
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="mt-20 mb-20">
            <DemoForm
              attrs={this.state.form}
              onChange={(form) => this.setState({ form })}
              validateOnChange
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

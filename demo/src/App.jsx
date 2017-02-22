import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoForm from './DemoForm';
import { bindState } from 'react-form-base';

export default class App extends Component {
  state = {
    form: {
      dialog: {}
    }
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="mt-20 mb-20">
            <DemoForm {...bindState(this)} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

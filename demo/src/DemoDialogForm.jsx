import React from 'react';
import { DialogForm, TextField } from '../../src';

export default class DemoDialogForm extends DialogForm {
  static validations = {
    presence: function(value) {
      if (!value) return 'cannot be blank';
    },

    email: function(value) {
      if (value && !/^[\w\d.]+@[\w\d]+.[\w\d]{2,}$/.test(value)) {
        return 'should be email';
      }
    }
  };

  validations = {
    email: ['presence', 'email'],
    firstName: 'presence',
    lastName: 'presence'
  };

  $render($) {
    return (
      <div>
        <div><TextField {...$('email')} floatingLabelText="Email" /></div>
        <div><TextField {...$('firstName')} floatingLabelText="First Name" /></div>
        <div><TextField {...$('lastName')} floatingLabelText="Last Name" /></div>
      </div>
    );
  }
}

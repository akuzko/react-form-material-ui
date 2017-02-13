import React from 'react';

import { DialogForm, TextField } from '../../src';

function isEmail(value) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}

export default class DemoDialogForm extends DialogForm {
  static validations = {
    presence: function(value) {
      if (!value) return 'cannot be blank';
    },

    email: function(value) {
      if (value && !isEmail(value)) return 'invalid email format';
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

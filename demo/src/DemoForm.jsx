import React from 'react';
import Form, { TextField } from '../../src';

export default class DemoForm extends Form {
  static validations = {
    presence(value) { if (!value) return 'cannot be blank'; },
    email(value) { if (!/^[\w\d\.]+@[\w\d\.]+$/.test(value)) return 'should be email'; }
  };

  validations = {
    foo: ['presence', 'email']
  };

  render() {
    return (
      <TextField {...this.$('foo')} floatingLabelText="Email" />
    );
  }
}

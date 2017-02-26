import React, { Component } from 'react';
import { DialogForm, bindDialogState } from '../src';
import { shallow } from 'enzyme';
import expect from 'expect';

describe('bindDialogState', function() {
  class Page extends Component {
    render() {
      return <DialogForm {...bindDialogState(this)} />;
    }
  }

  context('when component has no state defined', function() {
    it('passes empty object as `attrs` and false as `open`', function() {
      const wrapper = shallow(<Page />);
      expect(wrapper.find(DialogForm).prop('open')).toEqual(false);
      expect(wrapper.find(DialogForm).prop('attrs')).toEqual({});
    });
  });

  context('when component has defined state with true value for open form', function() {
    it('passes object as `attrs` and true as `open`', function() {
      const wrapper = shallow(<Page />);
      wrapper.setState({ formOpen: true, form: { foo: 'bar' } });
      expect(wrapper.find(DialogForm).prop('open')).toEqual(true);
      expect(wrapper.find(DialogForm).prop('attrs')).toEqual({ foo: 'bar' });
    });
  });

  context('with custom key', function() {
    class Page extends Component {
      render() {
        return <DialogForm {...bindDialogState(this, 'myForm')} />;
      }
    }

    it('passes object as attrs and true as `open`', function() {
      const wrapper = shallow(<Page />);
      wrapper.setState({ myFormOpen: true, myForm: { foo: 'bar' } });
      expect(wrapper.find(DialogForm).prop('open')).toEqual(true);
      expect(wrapper.find(DialogForm).prop('attrs')).toEqual({ foo: 'bar' });
    });
  });

  it('updates state when form changes', function() {
    const wrapper = shallow(<Page />);
    wrapper.find(DialogForm).prop('onChange')({ foo: 'bar' });
    expect(wrapper.state()).toEqual({ form: { foo: 'bar' } });
  });
});

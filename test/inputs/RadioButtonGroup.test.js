import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import RadioButtonGroup from '~/src/inputs/RadioButtonGroup';
import { RadioButton, RadioButtonGroup as MaterialRadioButtonGroup } from 'material-ui/RadioButton';

describe('<RadioButtonGroup />', function() {
  it('renders wrapper container with specified className', function() {
    const wrapper = shallow(<RadioButtonGroup name="foo" wrapperClassName="foo" />);
    const wrapped = wrapper.find('div.foo');
    expect(wrapped.find(MaterialRadioButtonGroup)).toNotBe(undefined);
  });

  it('when error prop is passed, renders it', function() {
    const wrapper = shallow(<RadioButtonGroup name="foo" error="is invalid" />);
    expect(wrapper.containsMatchingElement(<div className="error">is invalid</div>)).toBe(true);
  });

  it('uses errorClassName to render error block', function() {
    const wrapper = shallow(<RadioButtonGroup name="foo" error="is invalid" errorClassName="my-error" />);
    expect(wrapper.containsMatchingElement(<div className="my-error">is invalid</div>)).toBe(true);
  });

  it('passes proper onChange function to inner RadioButtonGroup', function() {
    const spy = createSpy();
    const e = {};
    const wrapper = shallow(<RadioButtonGroup name="foo" onChange={spy} />);
    wrapper.find(MaterialRadioButtonGroup).prop('onChange')(e, 'foo');
    expect(spy).toHaveBeenCalledWith('foo', e);
  });

  it('passes rest of props to inner RadioButtonGroup', function() {
    const wrapper = shallow(<RadioButtonGroup name="foo" className="foo" />);
    expect(wrapper.containsMatchingElement(<MaterialRadioButtonGroup name="foo" className="foo" />)).toBe(true);
  });

  describe('options', function() {
    it('accepts array of string as options in props', function() {
      const wrapper = shallow(<RadioButtonGroup name="foo" options={['foo', 'bar']} />);
      expect(wrapper.containsMatchingElement(<RadioButton value="foo" label="foo" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<RadioButton value="bar" label="bar" />)).toBe(true);
    });

    it('accepts array of objects as options in props', function() {
      const wrapper = shallow(<RadioButtonGroup name="foo" options={[{ value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' }]} />);
      expect(wrapper.containsMatchingElement(<RadioButton value="foo" label="Foo" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<RadioButton value="bar" label="Bar" />)).toBe(true);
    });

    it('accepts children as options in props', function() {
      const wrapper = shallow(<RadioButtonGroup name="foo"><RadioButton value="foo" label="Foo" /></RadioButtonGroup>);
      expect(wrapper.containsMatchingElement(<RadioButton value="foo" label="Foo" />)).toBe(true);
    });
  });
});

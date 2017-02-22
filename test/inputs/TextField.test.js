import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import TextField from '~/src/inputs/TextField';
import MaterialTextField from 'material-ui/TextField';

describe('<TextField />', function() {
  it('passes empty string when value is not defined', function() {
    const wrapper = shallow(<TextField value={undefined} />);
    expect(wrapper.containsMatchingElement(<MaterialTextField value="" />)).toBe(true);
  });

  it('passes error as errorText', function() {
    const wrapper = shallow(<TextField error="is invalid" />);
    expect(wrapper.containsMatchingElement(<MaterialTextField errorText="is invalid" />)).toBe(true);
  });

  it('passes proper onChange function to inner TextField', function() {
    const spy = createSpy();
    const e = { target: { value: 'foo' } };
    const wrapper = shallow(<TextField onChange={spy} />);
    wrapper.find(MaterialTextField).prop('onChange')(e);
    expect(spy).toHaveBeenCalledWith('foo', e);
  });

  it('passes rest of props to inner TextField', function() {
    const wrapper = shallow(<TextField className="foo" />);
    expect(wrapper.containsMatchingElement(<MaterialTextField className="foo" />)).toBe(true);
  });
});

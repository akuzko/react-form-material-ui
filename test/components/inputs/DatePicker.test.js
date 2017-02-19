import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import DatePicker from '~/src/components/inputs/DatePicker';
import MaterialDatePicker from 'material-ui/DatePicker';

describe('<DatePicker />', function() {
  it('renders wrapper container with specified className', function() {
    const wrapper = shallow(<DatePicker wrapperClassName="foo" />);
    const wrapped = wrapper.find('div.foo');
    expect(wrapped.find(MaterialDatePicker)).toNotBe(undefined);
  });

  it('passes null when value is undefined', function() {
    const wrapper = shallow(<DatePicker value={undefined} />);
    expect(wrapper.containsMatchingElement(<MaterialDatePicker value={null} />)).toBe(true);
  });

  it('when error prop is passed, renders it', function() {
    const wrapper = shallow(<DatePicker error="is invalid" />);
    expect(wrapper.containsMatchingElement(<div className="error">is invalid</div>)).toBe(true);
  });

  it('uses errorClassName to render error block', function() {
    const wrapper = shallow(<DatePicker error="is invalid" errorClassName="my-error" />);
    expect(wrapper.containsMatchingElement(<div className="my-error">is invalid</div>)).toBe(true);
  });

  it('passes proper onChange function to inner DatePicker', function() {
    const spy = createSpy();
    const e = {};
    const wrapper = shallow(<DatePicker onChange={spy} />);
    wrapper.find(MaterialDatePicker).prop('onChange')(e, '2017-01-01');
    expect(spy).toHaveBeenCalledWith('2017-01-01', e);
  });

  it('passes rest of props to inner DatePicker', function() {
    const wrapper = shallow(<DatePicker className="foo" />);
    expect(wrapper.containsMatchingElement(<MaterialDatePicker className="foo" />)).toBe(true);
  });
});

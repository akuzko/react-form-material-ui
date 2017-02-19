import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import Toggle from '~/src/components/inputs/Toggle';
import MaterialToggle from 'material-ui/Toggle';

describe('<Toggle />', function() {
  it('renders wrapper container with specified className', function() {
    const wrapper = shallow(<Toggle wrapperClassName="foo" />);
    const wrapped = wrapper.find('div.foo');
    expect(wrapped.find(MaterialToggle)).toNotBe(undefined);
  });

  it('passes toggled property with false value when input value is undefined', function() {
    const wrapper = shallow(<Toggle value={undefined} />);
    expect(wrapper.containsMatchingElement(<MaterialToggle toggled={false} />)).toBe(true);
  });

  it('passes toggled property with false value when input value is empty string', function() {
    const wrapper = shallow(<Toggle value="" />);
    expect(wrapper.containsMatchingElement(<MaterialToggle toggled={false} />)).toBe(true);
  });

  it('when error prop is passed, renders it', function() {
    const wrapper = shallow(<Toggle error="is invalid" />);
    expect(wrapper.containsMatchingElement(<div className="error">is invalid</div>)).toBe(true);
  });

  it('uses errorClassName to render error block', function() {
    const wrapper = shallow(<Toggle error="is invalid" errorClassName="my-error" />);
    expect(wrapper.containsMatchingElement(<div className="my-error">is invalid</div>)).toBe(true);
  });

  it('passes proper onToggle function to inner Toggle', function() {
    const spy = createSpy();
    const e = {};
    const wrapper = shallow(<Toggle onChange={spy} />);
    wrapper.find(MaterialToggle).prop('onToggle')(e, true);
    expect(spy).toHaveBeenCalledWith(true, e);
  });

  it('passes rest of props to inner Toggle', function() {
    const wrapper = shallow(<Toggle className="foo" />);
    expect(wrapper.containsMatchingElement(<MaterialToggle className="foo" />)).toBe(true);
  });
});

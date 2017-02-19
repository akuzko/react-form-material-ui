import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import Checkbox from '~/src/components/inputs/Checkbox';
import MaterialCheckbox from 'material-ui/Checkbox';

describe('<Checkbox />', function() {
  it('renders wrapper container with specified className', function() {
    const wrapper = shallow(<Checkbox wrapperClassName="foo" />);
    const wrapped = wrapper.find('div.foo');
    expect(wrapped.find(MaterialCheckbox)).toNotBe(undefined);
  });

  it('passes checked property with false value when input value is undefined', function() {
    const wrapper = shallow(<Checkbox value={undefined} />);
    expect(wrapper.containsMatchingElement(<MaterialCheckbox checked={false} />)).toBe(true);
  });

  it('passes checked property with false value when input value is empty string', function() {
    const wrapper = shallow(<Checkbox value="" />);
    expect(wrapper.containsMatchingElement(<MaterialCheckbox checked={false} />)).toBe(true);
  });

  it('when error prop is passed, renders it', function() {
    const wrapper = shallow(<Checkbox error="is invalid" />);
    expect(wrapper.containsMatchingElement(<div className="error">is invalid</div>)).toBe(true);
  });

  it('uses errorClassName to render error block', function() {
    const wrapper = shallow(<Checkbox error="is invalid" errorClassName="my-error" />);
    expect(wrapper.containsMatchingElement(<div className="my-error">is invalid</div>)).toBe(true);
  });

  it('passes proper onCheck function to inner Checkbox', function() {
    const spy = createSpy();
    const e = {};
    const wrapper = shallow(<Checkbox onChange={spy} />);
    wrapper.find(MaterialCheckbox).prop('onCheck')(e, true);
    expect(spy).toHaveBeenCalledWith(true, e);
  });

  it('passes rest of props to inner Checkbox', function() {
    const wrapper = shallow(<Checkbox className="foo" />);
    expect(wrapper.containsMatchingElement(<MaterialCheckbox className="foo" />)).toBe(true);
  });
});

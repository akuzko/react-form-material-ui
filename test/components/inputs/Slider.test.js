import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import Slider from '~/src/components/inputs/Slider';
import MaterialSlider from 'material-ui/Slider';

describe('<Slider />', function() {
  it('renders wrapper container with specified className', function() {
    const wrapper = shallow(<Slider wrapperClassName="foo" />);
    const wrapped = wrapper.find('div.foo');
    expect(wrapped.find(MaterialSlider)).toNotBe(undefined);
  });

  it('passes numeric value to inner Slider component', function() {
    const wrapper = shallow(<Slider value="0.2" />);
    expect(wrapper.containsMatchingElement(<MaterialSlider value={0.2} />)).toBe(true);
  });

  it('when error prop is passed, renders it', function() {
    const wrapper = shallow(<Slider error="is invalid" />);
    expect(wrapper.containsMatchingElement(<div className="error">is invalid</div>)).toBe(true);
  });

  it('uses errorClassName to render error block', function() {
    const wrapper = shallow(<Slider error="is invalid" errorClassName="my-error" />);
    expect(wrapper.containsMatchingElement(<div className="my-error">is invalid</div>)).toBe(true);
  });

  it('passes proper onChange function to inner Slider', function() {
    const spy = createSpy();
    const e = {};
    const wrapper = shallow(<Slider onChange={spy} />);
    wrapper.find(MaterialSlider).prop('onChange')(e, 3);
    expect(spy).toHaveBeenCalledWith(3, e);
  });

  it('passes rest of props to inner Slider', function() {
    const wrapper = shallow(<Slider className="foo" />);
    expect(wrapper.containsMatchingElement(<MaterialSlider className="foo" />)).toBe(true);
  });
});

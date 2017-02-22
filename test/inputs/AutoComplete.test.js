import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import AutoComplete from '~/src/inputs/AutoComplete';

describe('<AutoComplete />', function() {
  it('passes value as searchText', function() {
    const wrapper = shallow(<AutoComplete value="foo" dataSource={[]} />);
    expect(wrapper.find('AutoComplete').prop('searchText')).toEqual('foo');
  });

  it('passes error as errorText', function() {
    const wrapper = shallow(<AutoComplete error="is invalid" dataSource={[]} />);
    expect(wrapper.find('AutoComplete').prop('errorText')).toEqual('is invalid');
  });

  it('passes proper onUpdateInput function to handle change', function() {
    const spy = createSpy();
    const args = ['foo', [], {}];
    const wrapper = shallow(<AutoComplete onChange={spy} dataSource={[]} />);
    wrapper.find('AutoComplete').prop('onUpdateInput')(...args);
    expect(spy).toHaveBeenCalledWith(...args);
  });

  it('passes rest of props to inner AutoComplete', function() {
    const wrapper = shallow(<AutoComplete className="foo" dataSource={[]} />);
    expect(wrapper.find('AutoComplete').prop('className')).toEqual('foo');
  });
});

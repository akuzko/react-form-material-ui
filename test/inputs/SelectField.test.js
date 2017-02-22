import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import SelectField from '~/src/inputs/SelectField';
import MaterialSelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

describe('<SelectField />', function() {
  it('passes error as errorText', function() {
    const wrapper = shallow(<SelectField error="is invalid" />);
    expect(wrapper.containsMatchingElement(<MaterialSelectField errorText="is invalid" />)).toBe(true);
  });

  it('passes proper onChange function to inner SelectField', function() {
    const spy = createSpy();
    const e = {};
    const wrapper = shallow(<SelectField onChange={spy} />);
    wrapper.find(MaterialSelectField).prop('onChange')(e, 0, 'foo');
    expect(spy).toHaveBeenCalledWith('foo', 0, e);
  });

  it('passes rest of props to inner SelectField', function() {
    const wrapper = shallow(<SelectField className="foo" />);
    expect(wrapper.containsMatchingElement(<MaterialSelectField className="foo" />)).toBe(true);
  });

  describe('options', function() {
    it('accepts array of string as options in props', function() {
      const wrapper = shallow(<SelectField options={['foo', 'bar']} />);
      expect(wrapper.containsMatchingElement(<MenuItem value="foo" primaryText="foo" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<MenuItem value="bar" primaryText="bar" />)).toBe(true);
    });

    it('accepts array of objects as options in props', function() {
      const wrapper = shallow(<SelectField options={[{ value: 'foo', text: 'Foo' }, { value: 'bar', text: 'Bar' }]} />);
      expect(wrapper.containsMatchingElement(<MenuItem value="foo" primaryText="Foo" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<MenuItem value="bar" primaryText="Bar" />)).toBe(true);
    });

    it('accepts children as options in props', function() {
      const wrapper = shallow(<SelectField><MenuItem value="foo" primaryText="Foo" /></SelectField>);
      expect(wrapper.containsMatchingElement(<MenuItem value="foo" primaryText="Foo" />)).toBe(true);
    });
  });
});

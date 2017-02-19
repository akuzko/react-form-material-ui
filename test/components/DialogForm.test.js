import React from 'react';
import { shallow } from 'enzyme';
import expect, { spyOn } from 'expect';
import DialogForm from '~/src/components/DialogForm';
import FlatButton from 'material-ui/FlatButton';

describe('<DialogForm />', function() {
  class TestForm extends DialogForm {
    $render() {
      return <div>content</div>;
    }
  }

  it('uses $render method to render content', function() {
    const wrapper = shallow(<TestForm attrs={{}} />);
    expect(wrapper.containsMatchingElement(<div>content</div>)).toBe(true);
  });

  it('accepts title prop and passes it to inner Dialog', function() {
    const wrapper = shallow(<TestForm attrs={{}} title="Dialog" />);
    expect(wrapper.find('Dialog').prop('title')).toEqual('Dialog');
  });

  it('has actions by default', function() {
    const wrapper = shallow(<TestForm attrs={{}} />);
    const actions = wrapper.find('Dialog').prop('actions');
    expect(actions.length).toEqual(2);
    expect(actions[0].type).toEqual(FlatButton);
    expect(actions[0].props.label).toEqual('Cancel');
    expect(actions[1].type).toEqual(FlatButton);
    expect(actions[1].props.label).toEqual('Save');
  });

  it('triggers validation on save', function() {
    const wrapper = shallow(<TestForm attrs={{}} />);
    const instance = wrapper.instance();
    const spy = spyOn(instance, 'ifValid');
    instance.save();
    expect(spy).toHaveBeenCalled();
  });

  it('allows to overload title and actions', function() {
    class TestForm extends DialogForm {
      getTitle() { return 'My Title'; }
      getActions() {
        return [<FlatButton label="Close Me" onTouchTap={this.props.onRequestClose} />];
      }
    }

    const wrapper = shallow(<TestForm attrs={{}} />);
    const actions = wrapper.find('Dialog').prop('actions');
    expect(wrapper.find('Dialog').prop('title')).toEqual('My Title');
    expect(actions.length).toEqual(1);
    expect(actions[0].type).toEqual(FlatButton);
    expect(actions[0].props.label).toEqual('Close Me');
  });
});

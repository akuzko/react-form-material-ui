import React from 'react';
import Form, {
  TextField,
  AutoComplete,
  DatePicker,
  SelectField,
  RadioButtonGroup,
  Slider,
  Checkbox,
  Toggle,
} from 'react-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

export default class DemoForm extends Form {
  static validations = {
    presence(value) { if (!value) return 'cannot be blank'; },
    email(value) { if (value && !/^[\w\d\.]+@[\w\d\.]+$/.test(value)) return 'should be email'; },
    color(value, exactValue) { if (value !== exactValue) return `should be ${exactValue}` }
  };

  validations = {
    email: ['presence', 'email'],
    color1: { color: 'Red' },
    color2: { color: 'Green' },
    color3: { color: 'Blue' },
    startDate: 'presence',
    slider: function(value) {
      if (value < 0.5) return 'should be greater than 0.5';
    }
  };

  render() {
    return (
      <div>
        <div>{JSON.stringify(this.props.attrs)}</div>

        <div><TextField {...this.$('email')} floatingLabelText="Email" /></div>

        <div>
          <AutoComplete
            {...this.$('color1')} hintText="Color (Red)"
            dataSource={colors}
            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
            openOnFocus
          />
        </div>

        <div><DatePicker {...this.$('startDate')} hintText="Start Date" /></div>

        <div><SelectField {...this.$('color2')} options={colors} floatingLabelText="Color (Green)" /></div>

        <div>
          <SelectField {...this.$('color3')} floatingLabelText="Color (Blue)">
            <MenuItem value="Red" primaryText="Red" />
            <MenuItem value="Green" primaryText="Green" />
            <MenuItem value="Blue" primaryText="Blue" />
          </SelectField>
        </div>

        <div><RadioButtonGroup {...this.$('color4')} options={colors.slice(5)} name="color4" /></div>

        <hr />

        <div>
          <RadioButtonGroup {...this.$('color5')} name="color5">
            <RadioButton value="Red" label="Red" />
            <RadioButton value="Green" label="Green" />
            <RadioButton value="Blue" label="Blue" />
          </RadioButtonGroup>
        </div>

        <div><Slider {...this.$('slider')} /></div>

        <div><Checkbox {...this.$('checkbox')} label="Checkbox" /></div>

        <div style={{ maxWidth: 250 }}>
          <Toggle {...this.$('toggle')} label="Toggle" style={{ marginBottom: 16 }} />
        </div>

        <div>
          <RaisedButton label="Validate" onTouchTap={this.performValidation.bind(this)} />
        </div>
      </div>
    );
  }
}

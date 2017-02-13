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
} from '../../src';
import DemoDialogForm from './DemoDialogForm';
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
  makeInvalid(name) {
    this.setErrors({ ...this.getErrors(), [name]: 'is invalid' });
  }

  $render($) {
    return (
      <div className="horizontal-container">
        <div className="flex-item mr-20">
          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <DemoDialogForm
                {...$.nested('user')}
                title="Nested Dialog Form"
                open={this.state.open}
                onRequestClose={() => this.setState({ open: false })}
                onRequestSave={() => this.setState({ open: false })}
                validateOnChange
              />
              <div>
                <RaisedButton label="Open Dialog Form" onTouchTap={() => this.setState({ open: true })} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <TextField {...$('email')} floatingLabelText="Email" />
              <div>
                <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'email')} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <AutoComplete
                {...$('color1')}
                hintText="Color (Red)"
                dataSource={colors}
                filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                openOnFocus
              />
              <div>
                <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color1')} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <DatePicker {...$('startDate')} hintText="Start Date" />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'startDate')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <SelectField {...$('color2')} options={colors} floatingLabelText="Color (Green)" />
              <div>
                <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color2')} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <SelectField {...$('color3')} floatingLabelText="Color (Blue)">
                <MenuItem value="Red" primaryText="Red" />
                <MenuItem value="Green" primaryText="Green" />
                <MenuItem value="Blue" primaryText="Blue" />
              </SelectField>
              <div>
                <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color3')} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <RadioButtonGroup {...$('color4')} options={colors.slice(5)} name="color4" />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color4')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <RadioButtonGroup {...$('color5')}>
                <RadioButton value="Red" label="Red" />
                <RadioButton value="Green" label="Green" />
                <RadioButton value="Blue" label="Blue" />
              </RadioButtonGroup>
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color5')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <Slider {...$('slider')} />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'slider')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <Checkbox {...$('checkbox')} label="Checkbox" />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'checkbox')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20"></div>
            <div className="flex-item">
              <Toggle {...$('toggle')} label="Toggle" />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'toggle')} />
            </div>
          </div>
        </div>
        <div className="attrs">
          <div className="attrs-content">
            <pre>attrs: {JSON.stringify(this.props.attrs, null, '  ')}</pre>
            <pre>errors: {JSON.stringify(this.state.errors, null, '  ')}</pre>
          </div>
        </div>
      </div>
    );
  }
}

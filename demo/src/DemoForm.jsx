import React from 'react';
import Form, {
  TextField,
  AutoComplete,
  DatePicker,
  SelectField,
  RadioButtonGroup,
  Slider,
  Checkbox,
  Toggle
} from '../../src';
import Source from './Source';
import CollapsibleSource from './CollapsibleSource';
import DemoDialogForm from './DemoDialogForm';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

const colors = [
  'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'
];

export default class DemoForm extends Form {
  makeInvalid(name) {
    this.setErrors({ ...this.getErrors(), [name]: 'is invalid' });
  }

  $render($) {
    return (
      <div className="horizontal-container">
        <div className="flex-item mr-20">
          <div className="paper p-20 mb-20">
            <h1>React Form material-ui Demo</h1>
            <div className="mb-20">
              This small demo app shows a basic usage examples of components provided
              by <a href="https://github.com/akuzko/react-form-material-ui">react-form-material-ui</a>.
              For a showcase of features of form itself, please
              visit <a href="https://akuzko.github.io/react-form-base/">react-form-base</a>.
            </div>
            <div className="mb-20">
              Each input component bellow is rendered within a single common form. Also,
              for each of those inputs there is a "Validate" button that will
              invalidate corresponding input. Note that since form
              has <code>validateOnChange</code> property enabled (which is default
              behavior), each error will be cleared on input change.
            </div>
            <div>
              To the rightmost section of the page form renders its attributes
              (<code>this.props.attrs</code>) and errors (<code>this.state.errors</code>)
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <CollapsibleSource
                title="DemoDialogForm.jsx"
                code={`
                  import React from 'react';
                  import { DialogForm, TextField } from 'react-form-material-ui';

                  export default class DemoDialogForm extends DialogForm {
                    // NOTE: this static validation rules bellow are best to be defined
                    // in a very base Form class in your application, so your other
                    // forms could share and reuse them.
                    static validations = {
                      presence: function(value) {
                        if (!value) return 'cannot be blank';
                      },

                      email: function(value) {
                        // very primitive email check. not to be used in production
                        if (value && !/^[\w\d.]+@[\w\d]+.[\w\d]{2,}$/.test(value)) {
                          return 'should be email';
                        }
                      }
                    };

                    validations = {
                      email: ['presence', 'email'],
                      firstName: 'presence',
                      lastName: 'presence'
                    };

                    $render($) {
                      return (
                        <div>
                          <div><TextField {...$('email')} floatingLabelText="Email" /></div>
                          <div><TextField {...$('firstName')} floatingLabelText="First Name" /></div>
                          <div><TextField {...$('lastName')} floatingLabelText="Last Name" /></div>
                        </div>
                      );
                    }
                  }
                `}
              />
              <Source code={`
                <DemoDialogForm
                  {...$.nested('dialog')}
                  title="Nested Dialog Form"
                  open={this.state.open}
                  onRequestClose={() => this.setState({ open: false })}
                  onRequestSave={() => this.setState({ open: false })}
                  validateOnChange
                />
                <RaisedButton label="Open Dialog Form" onTouchTap={() => this.setState({ open: true })} />
                `}
              />
            </div>
            <div className="flex-item">
              <h4>DialogForm</h4>
              <DemoDialogForm
                {...$.nested('dialog')}
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
            <div className="flex-item two mr-20">
              <Source code={`<TextField {...$('fullName')} floatingLabelText="Full Name" />`} />
            </div>
            <div className="flex-item">
              <h4>TextField</h4>
              <TextField {...$('fullName')} floatingLabelText="Full Name" />
              <div>
                <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'fullName')} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`<DatePicker {...$('birthDate')} hintText="Birth Date" />`} />
            </div>
            <div className="flex-item">
              <h4>DatePicker</h4>
              <DatePicker {...$('birthDate')} hintText="Birth Date" />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'birthDate')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <AutoComplete
                  {...$('color1')}
                  hintText="Color 1"
                  dataSource={colors}
                  filter={(value, key) => (key.indexOf(value) !== -1)}
                  openOnFocus
                />
              `} />
            </div>
            <div className="flex-item">
              <h4>AutoComplete</h4>
              <AutoComplete
                {...$('color1')}
                hintText="Color 1"
                dataSource={colors}
                filter={(value, key) => (key.indexOf(value) !== -1)}
                openOnFocus
              />
              <div>
                <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color1')} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                const colors = [
                  'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'
                ];

                <SelectField {...$('color2')} options={colors} floatingLabelText="Color 2" />
              `} />
            </div>
            <div className="flex-item">
              <h4>SelectField, options via props</h4>
              <SelectField {...$('color2')} options={colors} floatingLabelText="Color 2" />
              <div>
                <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color2')} />
              </div>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <SelectField {...$('color3')} floatingLabelText="Color 3">
                  <MenuItem value="Red" primaryText="Red" />
                  <MenuItem value="Green" primaryText="Green" />
                  <MenuItem value="Blue" primaryText="Blue" />
                </SelectField>
              `} />
            </div>
            <div className="flex-item">
              <h4>SelectField, options via children</h4>
              <SelectField {...$('color3')} floatingLabelText="Color 3">
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
            <div className="flex-item two mr-20">
              <Source code={`
                const colors = ['Purple', 'Black', 'White'];

                <RadioButtonGroup {...$('color4')} options={colors} name="color4" />
              `} />
            </div>
            <div className="flex-item">
              <h4>RadioButtonGroup, options via props</h4>
              <RadioButtonGroup {...$('color4')} options={colors.slice(5)} name="color4" />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color4')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <RadioButtonGroup {...$('color5')}>
                  <RadioButton value="Purple" label="Purple" />
                  <RadioButton value="Black" label="Black" />
                  <RadioButton value="White" label="White" />
                </RadioButtonGroup>
              `} />
            </div>
            <div className="flex-item">
              <h4>RadioButtonGroup, options via children</h4>
              <RadioButtonGroup {...$('color5')}>
                <RadioButton value="Purple" label="Purple" />
                <RadioButton value="Black" label="Black" />
                <RadioButton value="White" label="White" />
              </RadioButtonGroup>
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'color5')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`<Slider {...$('slider')} />`} />
            </div>
            <div className="flex-item">
              <h4>Slider</h4>
              <Slider {...$('slider')} />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'slider')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`<Checkbox {...$('checkbox')} label="Checkbox" />`} />
            </div>
            <div className="flex-item">
              <h4>Checkbox</h4>
              <Checkbox {...$('checkbox')} label="Checkbox" />
              <RaisedButton label="Validate" onTouchTap={this.makeInvalid.bind(this, 'checkbox')} />
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`<Toggle {...$('toggle')} label="Toggle" />`} />
            </div>
            <div className="flex-item">
              <h4>Toggle</h4>
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

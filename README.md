material-ui Inputs for React Form Base
======================================

[material-ui](http://www.material-ui.com/) input bindings for [react-form-base](https://github.com/akuzko/react-form-base).

## Installation

```
npm install --save react-form-material-ui
```

## Usage

For a more detailed information on core functionality of `react-form-base`, take a
look at [it's demo](https://akuzko.github.io/react-form-base/). To see a sample
usage of this package components, you may want to look at [small demo](https://akuzko.github.io/react-form-material-ui/).

### Example

```js
import Form, {
  TextField,
  DatePicker,
  SelectField,
  Checkbox,
  Toggle,
  Slider,
  RadioButtonGroup,
  RadioButton
} from 'react-form-material-ui';

const colors = [
  'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'
];

export default class MyForm extends Form {
  render() {
    return (
      <div>
        <TextField {...this.$('fullName')} floatingLabelText="Full Name" />
        <DatePicker {...this.$('birthDate')} hintText="Birth Date" />
        <SelectField {...this.$('hairColor')} options={colors} floatingLabelText="Hair Color" />
        <AutoComplete
          hintText="Eye Color"
          dataSource={colors}
          filter={(value, key) => (key.indexOf(value) !== -1)}
          openOnFocus
        />
        <RadioButtonGroup {...this.$('sex')}>
          <RadioButton value="male" label="Male" />
          <RadioButton value="female" label="Female" />
        </RadioButtonGroup>
        <Slider {...this.$('tanLevel')} />
        <Checkbox {...this.$('admin')} label="Admin" />
        <Toggle {...this.$('extraFeatures')} label="Extra Features" />
      </div>
    );
  }
}
```

### DialogForm Example

```js
import { DialogForm, TextField } from 'react-form-material-ui';
import FlatButton from 'material-ui/FlatButton';

export default class MyDialogForm extends DialogForm {
  // title may be passed in props, or can be rendered dynamically (based on
  // form's attrs, for example) via getTitle method:
  getTitle() {
    return this.get('id') ? this.get('name') : 'New Item';
  }

  // actions may be passed in props, or they can be set dynamically. Bellow is
  // what DialogForm uses for actions by default if they are not passed in props.
  // You don't need to overload it if 2 buttons is what your DialogForm needs to have.
  getActions() {
    return [
      <FlatButton label={closeLabel} onTouchTap={this.props.onRequestClose} />,
      <FlatButton label={saveLabel} primary onTouchTap={() => this.save()} />
    ];
  }

  // NOTE: in DialogForm you have to use form's $render helper method for rendering
  // form content. Generally, this is optional (yet recommended) way of rendering,
  // but is mandatory in case of DialogForm.
  $render($) {
    <div>
      <div><TextField {...$('email')} floatingLabelText="Email" /></div>
      <div><TextField {...$('firstName')} floatingLabelText="First Name" /></div>
      <div><TextField {...$('lastName')} floatingLabelText="Last Name" /></div>
    </div>
  }
}
```

### Component Props

All **input** components (i.e. not `DialogForm`) receive **value**, **onChange**,
**error** and **name** properties from `react-form-base` API (this props generated
via form's `$` method).

Bellow are the specs for other properties that components work with.

#### `DialogForm`

`DialogForm` component renders it's content within `material-ui`'s `Dialog` component.
When extending `DialogForm` class, you have 2 extra methods at your disposal:

- `getTitle()`: overload it to set form's dialog title on rendering, if you don't
want to pass it in props.

- `getActions()`: overload it if you want your dialog form to have something
different from 'Cancel'-'Save' actions. Or you can pass `actions` in props
without overloading this method.

##### Props

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>saveLabel</td>
      <td><code>PropTypes.string</code>. Defaults to <code>'Save'</code></td>
      <td>
        label for 'save' primary action button that is one of 2 buttons that
        DialogForm generates by default.
      </td>
    </tr>
    <tr>
      <td>cancelLabel</td>
      <td><code>PropTypes.string</code>. Defaults to <code>'Cancel'</code></td>
      <td>
        label for 'cancel' action button that is one of 2 buttons that
        DialogForm generates by default.
      </td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to internal <code>Dialog</code> component.</td>
    </tr>
  </tbody>
</table>

#### `TextField`

This component is a simple wrapper around `material-ui`'s `TextField` component.

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to internal <code>TextField</code> component.</td>
    </tr>
  </tbody>
</table>

#### `DatePicker`

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>wrapperClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>
        className for the root component element (div), which wraps <code>DatePicker</code>
        component and error's div, which is rendered if input has validation errors.
      </td>
    </tr>
    <tr>
      <td>errorClassName</td>
      <td><code>PropTypes.string</code>. Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to internal <code>DatePicker</code> component.</td>
    </tr>
  </tbody>
</table>

#### `SelectField`

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>options</td>
      <td>
        <pre><code>PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      text: PropTypes.string
    })
  ])
)</code></pre>
      </td>
      <td>
        options to be rendered (as <code>MenuItem</code>s) within internal SelectField
        component. If array of strings or integers is passed, it's values are used as
        options' texts and values. If array of objects is passed, each object should have
        <code>value</code> and <code>text</code> properties.
      </td>
    </tr>
    <tr>
      <td>children</td>
      <td><code>PropTypes.node</code></td>
      <td>Can be used to render options manually. Overrides <code>options</code> prop.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to the internal <code>SelectField</code> component.</td>
    </tr>
  </tbody>
</table>

#### `AutoComplete`

This component is a simple wrapper around `material-ui`'s `AutoComplete` component.
It's main purpose is to map form's props into AutoComplete's analogs: <code>value</code>
is passed as <code>searchText</code>, <code>error</code> as <code>errorText</code>,
and appropriate <code>onUpdateInput</code> prop is generated to match form's
<code>onChange</code> API requirements (new value should be passed as first argument).

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to internal <code>AutoComplete</code> component.</td>
    </tr>
  </tbody>
</table>

#### `RadioButtonGroup`

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>options</td>
      <td>
        <pre><code>PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      label: PropTypes.string
    })
  ])
)</code></pre>
      </td>
      <td>
        options to be rendered (as <code>RadioButton</code>s) within internal RadioButton
        component. If array of strings or integers is passed, it's values are used as
        options' values and labels. If array of objects is passed, each object should have
        <code>value</code> and <code>label</code> properties.
      </td>
    </tr>
    <tr>
      <td>children</td>
      <td><code>PropTypes.node</code></td>
      <td>Can be used to render options manually. Overrides <code>options</code> prop.</td>
    </tr>
    <tr>
      <td>wrapperClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>
        className for the root component element (div), which wraps <code>RadioButtonGroup</code>
        component and error's div, which is rendered if input has validation errors.
      </td>
    </tr>
    <tr>
      <td>errorClassName</td>
      <td><code>PropTypes.string</code>. Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to the internal <code>RadioButtonGroup</code> component.</td>
    </tr>
  </tbody>
</table>

#### `Checkbox`

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>wrapperClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>
        className for the root component element (div), which wraps <code>Checkbox</code>
        component and error's div, which is rendered if input has validation errors.
      </td>
    </tr>
    <tr>
      <td>errorClassName</td>
      <td><code>PropTypes.string</code>. Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to internal <code>Checkbox</code> component.</td>
    </tr>
  </tbody>
</table>

#### `Toggle`

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>wrapperClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>
        className for the root component element (div), which wraps <code>Toggle</code>
        component and error's div, which is rendered if input has validation errors.
      </td>
    </tr>
    <tr>
      <td>errorClassName</td>
      <td><code>PropTypes.string</code>. Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to internal <code>Toggle</code> component.</td>
    </tr>
  </tbody>
</table>

#### `Slider`

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>wrapperClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>
        className for the root component element (div), which wraps <code>Slider</code>
        component and error's div, which is rendered if input has validation errors.
      </td>
    </tr>
    <tr>
      <td>errorClassName</td>
      <td><code>PropTypes.string</code>. Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to internal <code>Slider</code> component.</td>
    </tr>
  </tbody>
</table>

## Credits

Hugs and thanks to [ogrechishkina](https://github.com/ogrechishkina) for her
support and building all of the CSS for demo application.

## License

MIT

import React, { PropTypes, Component } from 'react';
import MaterialTextField from 'material-ui/TextField';

export default class TextField extends Component {
  static propTypes = {
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
  };

  onChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value, error, onChange, ...rest } = this.props;

    return <MaterialTextField value={value} onChange={this.onChange} errorText={error} {...rest} />;
  }
}

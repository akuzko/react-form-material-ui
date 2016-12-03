import React, { PropTypes, Component } from 'react';
import MaterialCheckbox from 'material-ui/Checkbox';

export default class Checkbox extends Component {
  static propTypes = {
    value: PropTypes.bool,
    error: PropTypes.string,
    errorClassName: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    errorClassName: 'error'
  };

  onChange = (e, value) => {
    this.props.onChange(!value, e);
  };

  render() {
    const { value, error, onChange, errorClassName, ...rest } = this.props;

    return (
      <div>
        <MaterialCheckbox onCheck={this.onChange} checked={!!value} {...rest} />
        {error &&
          <div className={errorClassName}>{error}</div>
        }
      </div>
    );
  }
}

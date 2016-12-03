import React, { PropTypes, Component } from 'react';
import MaterialDatePicker from 'material-ui/DatePicker';

export default class DatePicker extends Component {
  static propTypes = {
    error: PropTypes.string,
    errorClassName: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    errorClassName: 'error'
  };

  onChange = (e, value) => {
    this.props.onChange(value, e);
  };

  render() {
    const { error, errorClassName, onChange, ...rest } = this.props;

    return (
      <div>
        <MaterialDatePicker onChange={this.onChange} {...this.props} />
        {error &&
          <div className={errorClassName}>{error}</div>
        }
      </div>
    );
  }
}

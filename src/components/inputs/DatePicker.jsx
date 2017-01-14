import React, { PropTypes } from 'react';
import MaterialDatePicker from 'material-ui/DatePicker';

export default function DatePicker(props) {
  const { value, error, errorClassName, onChange, ...rest } = props;
  const pickerValue = value ? value : null;

  return (
    <div>
      <MaterialDatePicker value={pickerValue} onChange={(e, value) => onChange(value, e)} {...rest} />
      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </div>
  );
}

DatePicker.propTypes = {
  error: PropTypes.string,
  errorClassName: PropTypes.string,
  onChange: PropTypes.func
};

DatePicker.defaultProps = {
  errorClassName: 'error'
};

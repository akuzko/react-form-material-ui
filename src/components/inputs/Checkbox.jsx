import React, { PropTypes, Component } from 'react';
import MaterialCheckbox from 'material-ui/Checkbox';

export default function Checkbox(props) {
  const { value, error, onChange, wrapperClassName, errorClassName, ...rest } = props;
  const checked = Boolean(value);

  return (
    <div className={wrapperClassName}>
      <MaterialCheckbox
        checked={checked}
        onCheck={(e, value) => onChange(value, e)}
        {...rest}
      />
      {error &&
        <div classname={errorClassName}>{error}</div>
      }
    </div>
  );
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  wrapperClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

Checkbox.defaultProps = {
  errorClassName: 'error'
};

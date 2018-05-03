import React from 'react';
import PropTypes from 'prop-types';
import MaterialSwitch from 'material-ui/Switch';

export default function Switch(props) {
  const { value, error, onChange, wrapperClassname, errorClassName, ...rest } = props;
  const toggled = Boolean(value);

  return (
    <div className={wrapperClassname}>
      <MaterialSwitch
        toggled={toggled}
        onToggle={(e, value) => onChange(value, e)}
        {...rest}
      />
      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </div>
  );
}

Switch.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  wrapperClassname: PropTypes.string,
  errorClassName: PropTypes.string
};

Switch.defaultProps = {
  errorClassName: 'error'
};

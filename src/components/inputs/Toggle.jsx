import React, { PropTypes, Component } from 'react';
import MaterialToggle from 'material-ui/Toggle';

export default function Toggle(props) {
  const { value, error, onChange, ...rest } = props;
  const toggled = Boolean(value);

  return (
    <MaterialToggle
      toggled={toggled}
      onToggle={(e, value) => onChange(value, e)}
      {...rest}
    />
  );
}

Toggle.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.string,
  onChange: PropTypes.func
};

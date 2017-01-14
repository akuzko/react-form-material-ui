import React, { PropTypes, Component } from 'react';
import MaterialSlider from 'material-ui/Slider';

export default function Slider(props) {
  const { value, error, onChange, inputClassName, errorClassName, ...rest } = props;

  return (
    <div className={inputClassName}>
      <MaterialSlider
        value={+value}
        onChange={(e, value) => onChange(value, e)}
        {...rest}
      />
      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </div>
  );
}

Slider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  errorClassName: PropTypes.string,
  inputClassName: PropTypes.string
};

Slider.defaultProps = {
  errorClassName: 'error'
};

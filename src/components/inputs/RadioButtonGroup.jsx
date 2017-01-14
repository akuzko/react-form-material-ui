import React, { PropTypes } from 'react';
import { RadioButton, RadioButtonGroup as MaterialRadioButtonGroup } from 'material-ui/RadioButton';

export default function RadioButtonGroup(props) {
  const { value, error, onChange, options, children, ...rest } = props;

  if (options && children) {
    console.error('RadioButtonGroup: options property cannot be supplied with children.')
  }

  const radioItems = children || options.map((opt, i) => {
    const { value, text } = typeof opt === 'string' ? { value: opt, text: opt } : opt;

    return <RadioButton key={i} value={value} label={text} />;
  });


  return (
    <MaterialRadioButtonGroup
      valueSelected={value}
      onChange={(e, value) => onChange(value, e)}
      {...rest}
    >
      {radioItems}
    </MaterialRadioButtonGroup>
  );
}

RadioButtonGroup.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string, // ignored
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string
      })
    ])
  )
};

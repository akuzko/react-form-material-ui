import React, { PropTypes, Component } from 'react';
import MaterialSelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function SelectField(props) {
  const { value, error, onChange, options, children, ...rest } = props;

  if (options && children) {
    console.error('SelectField: options property cannot be supplied with children.')
  }

  const optionItems = children || options.map((opt, i) => {
    const { value, text } = typeof opt === 'string' ? { value: opt, text: opt } : opt;

    return <MenuItem key={i} value={value} primaryText={text} />;
  });


  return (
    <MaterialSelectField
      value={value}
      onChange={(e, i, value) => onChange(value, i, e)}
      errorText={error}
      {...rest}
    >
      {optionItems}
    </MaterialSelectField>
  );
}

SelectField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
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

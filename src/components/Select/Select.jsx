import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";

import Select from './MaterialSelect';
import styles, { theme } from './MaterialSelect.styles';


const propTypes = {
  options: PropTypes.arrayOf({}),
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  multiple: PropTypes.bool,
}

const defaultProps = {
  options: [],
  labelKey: 'label',
  valueKey: 'value',
  onChange: () => {},
  name: 'selectDefaultName',
  multiple: false,
}

function getValue(flatValue, options = [], labelKey) {
  const values = options.filter(option => option[labelKey] === flatValue);
  return values.length > 0 ? values[0] : undefined;
}

function SmartSelect({
  onChange,
  value,
  options,
  valueKey,
  labelKey,
  multiple,
  ...props
}) {
  const firstOption = options[0] || '';
  const optionsAreObjects = (typeof firstOption == 'object');
  const valueIsObject = (typeof value == 'object');
  let selectValue = '';
  if (value) {
    selectValue = valueIsObject ? value[valueKey] : value;
  }

  if (multiple) {
    selectValue = value || [];
  }

  return(
    <Select
      value={selectValue}
      onChange={(event) => {
        if (multiple) {
          return onChange(event.target.value);
        }
        const value = optionsAreObjects ? getValue(event.target.value, options, valueKey) : event.target.value;
        return onChange(value);
      }}
      multiple={multiple}
      {...props}
    >
      {options.map(option => {
        const value = optionsAreObjects ? option[valueKey] : option;
        const label = optionsAreObjects ? option[labelKey] : option;
        return (
          <MenuItem value={value} classes={{
            root: props.classes.selectMenuItem,
            selected: props.classes.selectMenuItemSelectedMultiple
          }}>
            {label}
          </MenuItem>
        )
      })}
    </Select>
  );
}

SmartSelect.propTypes = propTypes;
SmartSelect.defaultProps = defaultProps;

export default withStyles(styles)(SmartSelect);

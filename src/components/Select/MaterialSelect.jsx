import React from "react";
import Select from '@material-ui/core/Select';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { MuiThemeProvider } from "@material-ui/core/styles";
import classNames from "classnames";


import styles, { theme } from './MaterialSelect.styles';


function IntegrationSelect({
  classes,
  labelText,
  labelProps,
  id,
  inputProps,
  inputLabelProps,
  formControlProps,
  helpText,
  error,
  success,
  ...props
}) {
  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  return (
    <FormControl {...formControlProps} className={classes.selectFormControl}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
          {...inputLabelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <MuiThemeProvider theme={theme}>
        <Select
          {...props}
          style={{ width: '100%', marginTop: '15px' }}
          MenuProps={{ className: classes.selectMenu }}
          classes={{ select: classes.select }}
        />
      </MuiThemeProvider>
      {helpText !== undefined ? (
        <FormHelperText id={id + "-text"}>
          {helpText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default withStyles(styles)(IntegrationSelect);


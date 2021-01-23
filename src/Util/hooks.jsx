import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import validationFormsStyle from '../components/Validation/validationFormsStyle';
import sweetAlertStyle from "../components/SweetAlert/SweetAlertStyle";

const muiStyles = (styles = validationFormsStyle, theme = createMuiTheme()) => styles(theme);
export const useFormStyles = makeStyles(muiStyles());
export const useSweetAlertStyle = makeStyles(sweetAlertStyle);
export const useStyles = makeStyles;


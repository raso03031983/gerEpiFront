import { dangerColor, successColor, grayColor } from "../DashBoardPro";
import customSelectStyle from "./customSelectStyle";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import { createMuiTheme } from "@material-ui/core/styles";

export const palette = {
  primary: {
    main: "#1de9b6",
    dark: "#004385",
  },
};

export const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      formControl: {
        top: "10px",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderColor: grayColor[4] + "!important",
        },
      },
    },
  },
});

const styles = (theme) => {
  return {
    ...customSelectStyle,
    root: {
      flexGrow: 1,
      height: 250,
    },
    input: {
      display: "flex",
      padding: 0,
    },
    valueContainer: {
      display: "flex",
      flexWrap: "wrap",
      flex: 1,
      alignItems: "center",
      overflow: "hidden",
    },
    chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === "light"
          ? theme.palette.grey[300]
          : theme.palette.grey[700],
        0.08
      ),
    },
    noOptionsMessage: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
      fontSize: 14,
    },
    placeholder: {
      position: "absolute",
      left: 2,
      fontSize: 16,
    },
    paper: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0,
    },
    divider: {
      height: theme.spacing.unit * 2,
    },
    formControl: {
      margin: "0 0 17px 0",
      paddingTop: "27px",
      position: "relative",
      verticalAlign: "unset",
      "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
        color: grayColor[14],
      },
    },
    selectFormControl: {
      margin: "13px 0 17px 0",
    },
    reactSelectFormControl: {
      margin: "0 0 17px 0",
    },
    labelRoot: {
      // ...defaultFont,
      color: grayColor[3] + " !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857",
      // top: "10px",
      "& + $underline": {
        marginTop: "0px",
      },
    },
    labelRootError: {
      color: dangerColor[0] + " !important",
    },
    labelRootSuccess: {
      color: successColor[0] + " !important",
    },
    dropdownIndicator: {
      color: grayColor[1] + " !important",
    },
  };
};

export default styles;

import {
  cardTitle,
  dangerColor,
  whiteColor,
  grayColor
} from "../DashBoardPro";
import customCheckboxRadioSwitch from "../customCheckboxRadioSwitch/customCheckboxRadioSwitch";

const validationFormsStyle = (theme) => ({
  ...customCheckboxRadioSwitch,
  cardTitle: {
    ...cardTitle,
    color: whiteColor
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  formCategory: {
    marginBottom: "0",
    color: grayColor[0],
    fontSize: "14px",
    padding: "10px 0 10px"
  },
  center: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  registerButton: {
    float: "right"
  },
  danger: {
    color: dangerColor[0] + "!important"
  },
  modalCloseButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
});

export default validationFormsStyle;

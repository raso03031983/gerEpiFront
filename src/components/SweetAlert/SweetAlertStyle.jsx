import { grayColor } from "../DashBoardPro";

import buttonStyle from "../Button/ButtonStyle";

const sweetAlertStyle = {
  cardTitle: {
    marginTop: "0",
    marginBottom: "3px",
    color: grayColor[2],
    fontSize: "18px"
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  ...buttonStyle
};

export default sweetAlertStyle;

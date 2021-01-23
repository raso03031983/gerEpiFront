import React from "react";
import Avatar from "@material-ui/core/Avatar";

const defaultImage = require("./placeholder.png");
function AvatarOption({ imageScr, text }) {
  const [defaultSrc, setDefaultSrc] = React.useState(null);
  const src = imageScr ? imageScr : defaultImage;
  return (
    <>
      <Avatar
        src={defaultSrc ? defaultSrc : src}
        imgProps={{ onError: () => setDefaultSrc(defaultImage) }}
      />
      &nbsp;&nbsp;
      <span style={{ fontSize: "11px", fontWeight: "bold" }}>{text}</span>
    </>
  );
}

export default AvatarOption;

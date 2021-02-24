import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import { pushMessage } from "../firebase";

const MessageFieldComponent = ({ name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessage({ name: "けんさん", text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={text}
    />
  );
};

export default MessageFieldComponent;

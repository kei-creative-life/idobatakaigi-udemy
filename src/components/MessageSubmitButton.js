import React from "react";
import { pushMessage } from "../firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name: "けんさん", text });
        setText("");
        inputEl.current.focus()
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;

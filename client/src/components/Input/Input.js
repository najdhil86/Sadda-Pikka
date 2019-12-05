import React from "react";
import { FaPaperPlane } from "react-icons/fa";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>
      <FaPaperPlane size={30} />
    </button>
  </form>
);

export default Input;

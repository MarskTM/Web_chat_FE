import React from "react";
import "./index.css";
import Members from "../../components/list_members";
import Messages from "../../components/list_messages";

export default function ChatScreen() {
  return (
    <div className="gradient">
      <div className="chat-container">
        <Members />
        <Messages />
      </div>
    </div>
  );
}

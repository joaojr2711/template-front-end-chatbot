import React from 'react';

import { Container, ChatToggle, ChatContainer } from './style';

import { BiBot, BiX } from "react-icons/bi";

import { useChat } from "../../hooks/ChatContext";

const Chat: React.FC = () => {
  const { state, updateToggle } = useChat();
  const { toggle } = state;

  const handleToggle = () => {
    updateToggle(!toggle);
  }

  return (
    <Container>
      {toggle &&  <ChatContainer /> }
      <ChatToggle onClick={handleToggle}>
        {!toggle ? <BiBot size={30} /> : <BiX size={30} />}
      </ChatToggle>
    </Container>
  );
};

export default Chat;

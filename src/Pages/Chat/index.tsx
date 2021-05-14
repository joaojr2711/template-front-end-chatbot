import React from 'react';

import { Container, ChatToggle } from './style';

import { BiBot, BiX } from "react-icons/bi";

import { useChat } from "../../hooks/ChatContext";

const Chat: React.FC = () => {
  const { state } = useChat();
  const { toggle } = state;

  return (
    <Container>
      <ChatToggle>
        {!toggle ? <BiBot size={30}/> : <BiX size={30}/>}
      </ChatToggle>
    </Container>
  );
};

export default Chat;

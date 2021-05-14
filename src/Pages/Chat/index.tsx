import React from 'react';

import { Container, ChatToggle } from './style';

import { BiBot } from "react-icons/bi";

const Chat: React.FC = () => {
  return (
    <Container>
      <ChatToggle>
        <BiBot size={30}/>
      </ChatToggle>
    </Container>
  );
};

export default Chat;

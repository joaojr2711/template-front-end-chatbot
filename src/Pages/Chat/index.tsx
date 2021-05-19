import React from 'react';

import { Container, ChatToggle, ChatContainer, ChatBody, ChatHeader, FormChat } from './style';

import { BiBot, BiX } from "react-icons/bi";
import { MdSend } from "react-icons/md";

import { useChat } from "../../hooks/ChatContext";

const Chat: React.FC = () => {
  const { state, updateToggle } = useChat();
  const { toggle } = state;

  const handleToggle = () => {
    updateToggle(!toggle);
  }

  return (
    <Container>
      {toggle && (
        <ChatContainer>
          <ChatHeader>
            Fale com o nosso assistente
            </ChatHeader>
          <ChatBody>

          </ChatBody>
          <FormChat>
            <input type="text" id="chat-input" autoComplete="off" placeholder="Enviar uma mensagem..." />
            <button type="submit" id="chat-submit"><MdSend size={30}/></button>
          </FormChat>
        </ChatContainer>
      )}
      <ChatToggle onClick={handleToggle}>
        {!toggle ? <BiBot size={30} /> : <BiX size={30} />}
      </ChatToggle>
    </Container>
  );
};

export default Chat;

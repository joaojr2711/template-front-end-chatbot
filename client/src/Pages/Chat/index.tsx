import React from 'react';

import { Container, ChatToggle, ChatContainer, ChatBody, ChatHeader, FormChat } from './style';
import { sendMessage } from '../../common';

import { BiBot, BiX } from "react-icons/bi";
import { MdSend } from "react-icons/md";

import { useChat } from "../../hooks/ChatContext";

const Chat: React.FC = () => {
  const { state, updateToggle, createSession } = useChat();
  const { toggle } = state;

  const handleToggle = async () => {
    await createSession();
    await updateToggle(!toggle);
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
          <FormChat onSubmit={e => sendMessage(e)} autoComplete="off">
            <input type="text" id="chat-input" placeholder="Enviar uma mensagem..." />
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

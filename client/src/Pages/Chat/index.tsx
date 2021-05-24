import React from 'react';

import { Container, ChatToggle, ChatContainer, ChatBody, ChatHeader, FormChat, FromWatson, FromUser } from './style';

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
              <FromWatson>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, recusandae voluptatem officiis sint praesentium facere vel non quibusdam modi totam fugiat nemo adipisci eveniet soluta quod fuga facilis suscipit molestias!</p>
              </FromWatson>
              <FromUser>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quidem deleniti iste, sint exercitationem aliquam, earum ipsum necessitatibus ratione laboriosam dicta numquam veritatis suscipit harum dolorem. Nihil ea omnis voluptatem.</p>
              </FromUser>
              <FromUser>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quidem deleniti iste, sint exercitationem aliquam, earum ipsum necessitatibus ratione laboriosam dicta numquam veritatis suscipit harum dolorem. Nihil ea omnis voluptatem.</p>
              </FromUser>
              <FromWatson>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, recusandae voluptatem officiis sint praesentium facere vel non quibusdam modi totam fugiat nemo adipisci eveniet soluta quod fuga facilis suscipit molestias!</p>
              </FromWatson>
          </ChatBody>
          <FormChat autoComplete="off">
            <input type="text" id="chat-input" placeholder="Enviar uma mensagem..." />
            <button type="submit" id="chat-submit"><MdSend size={30} /></button>
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

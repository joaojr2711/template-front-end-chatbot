import React, { useState, useEffect } from 'react';

import { Container, ChatToggle, ChatContainer, ChatBody, ChatHeader, FormChat, FromWatson, FromUser } from './style';
import LoadingWatson from '../../components/loading';
import ButtonsWatson from '../../components/buttons';

import { BiBot, BiX } from "react-icons/bi";
import { MdSend } from "react-icons/md";

import { useChat } from "../../hooks/ChatContext";
import api from '../../services/api';

const DisplayOutputResponse: React.FC = ({ data }: object) => {
  const { id, from, payload } = data;

  if (from === "from-watson") {
    switch (payload.response_type) {
      case 'text':
        return <FromWatson key={id}>{payload.text}</FromWatson>
      case 'option':
        return <ButtonsWatson id={id} title={payload.title} options={payload.options} />
      default:
        return <LoadingWatson />
    }
  }
  else if (from === "from-user") {
    return <FromUser key={id}>{payload.input.text}</FromUser>
  }
  else {
    return <LoadingWatson />
  }
}

const Chat: React.FC = () => {
  const { state, updateToggle, createSession, updateChat } = useChat();

  const { toggle, loading, session_id, messages } = state;

  const [input, SetInput] = useState('');

  const handleToggle = async () => {
    await updateToggle(!toggle);
  }

  const sendMessage = async (event: object) => {
    event.preventDefault();

    let payload = {
      session_id: session_id,
      input: {
        text: input,
      }
    }

    await api.post('message', payload)
      .then(response => {
        console.log({ response })
        updateChat(payload, 'from-user');
        updateChat(response.data.output.generic[0], 'from-watson')
      })
  }

  useEffect(() => {
    createSession();
  }, [])

  return (
    <Container>
      {toggle && (
        <ChatContainer>
          <ChatHeader>
            Fale com o nosso assistente
          </ChatHeader>
          <ChatBody>
            {
              messages.length === 0 ? loading && <LoadingWatson /> : messages.map((msg) => <DisplayOutputResponse data={msg} />)
            }
          </ChatBody>
          <FormChat autoComplete="off" onSubmit={(e) => sendMessage(e)}>
            <input
              type="text"
              id="chat-input"
              placeholder="Enviar uma mensagem..."
              onChange={e => SetInput(e.target.value)}
            />
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

import React from 'react';
import { useChat } from '../../hooks/ChatContext';
import api from '../../services/api';

import { ContainerButtons, ContainerMessage } from './style';

interface PropsButton {
  id: string;
  title: string;
  options: array;
}

const ButtonsWatson: React.FC<PropsButton> = ({ id, title, options }) => {
  const { state, updateChat } = useChat();

  const handleClick = async (input: string) => {

    let payload = {
      session_id: state.session_id,
      input: {
        text: input,
      }
    }

    await api.post('message', payload)
      .then(response => {
        updateChat(payload, 'from-user');
        updateChat(response.data.output.generic[0], 'from-watson')
    })
  }

  return (
    <div key={id}>
      {
        !!title && (
          <ContainerMessage>
            <p>{title}</p>
          </ContainerMessage>
        )
      }

      {
        !!options && (
          <ContainerButtons>
            <section>
              {
                options.map((item: object, index: string) => (
                  <button value={item.label} onClick={() => handleClick(item.value.input.text)} key={index}>{item.label}</button>
                ))
              }
            </section>
          </ContainerButtons>
        )
      }

    </div>
  );
};

export default ButtonsWatson;

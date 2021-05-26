import React from 'react';

import { ContainerButtons, ContainerMessage } from './style';

const ButtonsWatson: React.FC = ({ id, title, options }) => {
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
                  <button value={item.value.input.text} key={index}>{item.label}</button>
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

import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
`;

export const ChatToggle = styled.button`
  position: absolute;
  display: flex;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);

  justify-content: center;
  align-items: center;

  svg {
    text-align: center;
  }
`;

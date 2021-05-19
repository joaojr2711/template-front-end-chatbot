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

export const ChatContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 500px;
  background: ${props => props.theme.background};
  border-radius: 10px;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  border-radius: 10px 10px 0px 0px;
  background: ${props => props.theme.primary};
  height: 55px;
  text-align: center;
  padding: 0px;
  line-height: 55px;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 15px;
  color: ${props => props.theme.white};
`;

export const ChatBody = styled.div`
  position: relative;
  height: calc(90vh - 176px);
  overflow: hidden;
  background-color: ${props => props.theme.third};
`;

export const FormChat = styled.form`
  border-top: 2px solid ${props => props.theme.background};
  border-radius: 0px 0px 12px 12px;
  display: flex;
  background: ${props => props.theme.third};
  margin-bottom: 0;
  height: 47px;
  overflow: hidden;

  input {
    background: transparent;
    width: 100%;
    position: relative;
    height: 47px;
    padding-left: 15px;
    border: none;
    resize: none;
    outline: none;
    color: ${props => props.theme.secundary};
    overflow: hidden;
    border-radius: 0px 0px 12px 12px;
  }

  button {
    background: transparent;
    box-shadow: none;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    color: ${props => props.theme.primary};
    width: 35px;
    height: 47px;
    margin-right: 10px;

    svg {
      line-height: 47px;
    }
  }
`;

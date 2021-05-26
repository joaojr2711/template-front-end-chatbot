import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;

  p {
    margin: 5px;
    font-size: 14px;
  }
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
  font-size: 15px;
  color: ${props => props.theme.white};
`;

export const ChatBody = styled.div`
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(90vh - 176px);
  background-color: ${props => props.theme.third};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.gray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${props => props.theme.primary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.primary};
  }
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

export const FromWatson = styled.div`
  float: left;
  width: 75%;
  font-size: 14px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  p {
    color: ${props => props.theme.white};
  }
`;

export const FromUser = styled.div`
  float: right;
  width: 75%;
  font-size: 14px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.secundary};
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  p {
    color: ${props => props.theme.secundary};
  }
`;

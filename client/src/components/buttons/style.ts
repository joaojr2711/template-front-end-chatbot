import styled from 'styled-components';

export const ContainerMessage = styled.div`
  float: left;
  width: 75%;
  background: ${props => props.theme.primary};
  font-size: 14px;
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

    p {
      color: ${props => props.theme.white};
    }
`;

export const ContainerButtons = styled.div`
  display: block;
  width: 100%;

  section {
    padding: 8px;
    flex-flow: wrap;
    display: content;

    button {
      float: right;
      background: transparent;
      border: 1.5px solid ${props => props.theme.primary};
      padding: 8px 10px;
      margin: 2px;
      border-radius: 50px;
      cursor: pointer;
      color: ${props => props.theme.primary};

      &:hover {
        background:  ${props => props.theme.primary};;
        color: ${props => props.theme.white};
      }
    }
  }
`;

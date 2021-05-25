import styled from 'styled-components';

export const ContainerLoading = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;

  div {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    z-index: 2;
    margin-left: 8px;
  }

  div:nth-child(1) {
    background: ${props => props.theme.primary};
    left: 10px;
    animation: nth-child1 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  div:nth-child(2) {
    background: ${props => props.theme.primary};
    left: 20px;
    animation: nth-child2 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
  }

  div:nth-child(3) {
    background: ${props => props.theme.primary};
    left: 30px;
    animation: nth-child3 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;

  }

  @keyframes nth-child1 {
      0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes nth-child2 {
      0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes nth-child3 {
      0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

`;

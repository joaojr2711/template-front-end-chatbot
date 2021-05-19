import React, { createContext, useContext, useState, ReactNode } from "react";

interface InitContextProps {
  state: ChatState;
  updateToggle: (newState: boolean) => void;
}

interface Props {
  children: ReactNode;
}

interface ChatState {
  toggle: boolean;
}

const ChatContext = createContext({} as InitContextProps);

const ChatProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<ChatState>({
    toggle: false,
  });

  const updateToggle = async (newState: boolean) => {
    await setState({ ...state, toggle: newState })
  }

  return (
    <ChatContext.Provider
      value={{ state, updateToggle }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within an ChatProvider");
  }

  return context;
};

export { ChatProvider, useChat };

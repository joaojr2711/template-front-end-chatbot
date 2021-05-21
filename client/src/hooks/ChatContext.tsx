import React, { createContext, useContext, useState, ReactNode } from "react";
import api from "../services/api";

interface InitContextProps {
  state: ChatState;
  updateToggle: (newState: boolean) => void;
  createSession: () => void;
}

interface Props {
  children: ReactNode;
}

interface ChatState {
  toggle: boolean;
  session_id: string;
}

const ChatContext = createContext({} as InitContextProps);

const ChatProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<ChatState>({
    toggle: false,
    session_id: '',
  });

  const updateToggle = async (newState: boolean) => {
    await setState({ ...state, toggle: newState })
  }

  const createSession = async () => {
    const response = await api.get('session');
    const { session_id } = response.data;

    await setState({ ...state, session_id: session_id })
  }

  return (
    <ChatContext.Provider
      value={{ state, updateToggle, createSession }}
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

import React, { createContext, useContext, useState, ReactNode } from "react";
import api from "../services/api";

interface InitContextProps {
  state: ChatState;
  updateToggle: (newState: boolean) => void;
  createSession: () => void;
  updateChat: (payload: object, from: string) => void;
}

interface Props {
  children: ReactNode;
}

interface ChatState {
  toggle: boolean;
  session_id: string;
  messages: MessagesChat[];
}

interface MessagesChat {
  payload: object;
  from: string;
}

const ChatContext = createContext({} as InitContextProps);

const ChatProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<ChatState>({
    toggle: false,
    session_id: '',
    messages: [],
  });

  const updateToggle = async (newState: boolean) => {
    await setState({ ...state, toggle: newState })
  }

  const createSession = async () => {
    const response = await api.get('session');
    const { session_id } = response.data;

    await setState({ ...state, session_id: session_id })
  }

  const updateChat = (payload: object, from: string) => {
    const { messages } = state;

    messages.push(...messages, { payload: payload, from: from });
}

return (
  <ChatContext.Provider
    value={{ state, updateToggle, updateChat, createSession }}
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

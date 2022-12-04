import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ModalContextState {
  contactModalIsOpen: boolean;
  setContactModalIsOpen: Dispatch<SetStateAction<boolean>>;
  compatibleTargetModalIsOpen: boolean;
  setCompatibleTargetModalIsOpen: Dispatch<SetStateAction<boolean>>;
}
const initialState: ModalContextState = {
  contactModalIsOpen: false,
  setContactModalIsOpen: () => {},
  compatibleTargetModalIsOpen: false,
  setCompatibleTargetModalIsOpen: () => {},
};

export const ModalContext = createContext(initialState);

export interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [contactModalIsOpen, setContactModalIsOpen] = useState<boolean>(false);
  const [compatibleTargetModalIsOpen, setCompatibleTargetModalIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        contactModalIsOpen,
        setContactModalIsOpen,
        compatibleTargetModalIsOpen,
        setCompatibleTargetModalIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

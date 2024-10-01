import React, { useReducer } from "react";

export type ModalState = {
  // IDs of all active modals
  // If it exists in this list, the modal is considered 'open'
  modals: string[];
}

export type ModalAction = {
  type: 'open' | 'close';
  id: string;
};

export const ModalReducer: React.Reducer<ModalState, ModalAction> = (state, action) => {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        modals: [...state.modals, action.id],
      };
    case 'close':
      return {
        ...state,
        modals: state.modals.filter(entry => entry !== action.id),
      }
    default:
      return state;
  }
};

const initialModalState: ModalState = {
  modals: [],
};

export const ModalStateContext = React.createContext<ModalState>(initialModalState);
export const ModalDispatchContext = React.createContext<React.Dispatch<ModalAction>>(() => console.error('ModalDispatch was not supplied with a provider.'));

export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, initialModalState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        { children }
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
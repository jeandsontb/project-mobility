import React, {createContext, useContext, useReducer} from 'react';

import AplicationReducer from '../reducers/AplicationReducer';

const initialState = {
  app: AplicationReducer(),
};

const MainReducer = (state, action) => ({
  app: AplicationReducer(state.app, action),
});

export const StateContext = createContext();

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const AppStateValue = () => useContext(StateContext);

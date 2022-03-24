import React, { createContext, useReducer } from "react";

const initialState = {
  account: [],
  chain: { id: null, name: "" },
  isConnected: false,
  web3: null,
};

const typeStateMap = {
  SET_ACCOUNT: "account",
  SET_CHAIN: "chain",
  SET_CONNECTED: "isConnected",
  SET_WEB3: "web3",
  SET_DEACTIVATE: "deactivate",
};

const reducer = (state, action) => {
  const stateName = typeStateMap[action.type];
  if (!stateName) {
    console.warn(`Unkown action type: ${action.type}`);
    return state;
  }
  if (stateName === "deactivate") {
    return { ...initialState };
  } else {
    return { ...state, [stateName]: action.payload };
  }
};

const MetaStateContext = createContext(initialState);
const MetaDispatchContext = createContext();
const MetamaskStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MetaDispatchContext.Provider value={dispatch}>
      <MetaStateContext.Provider value={state}>
        {children}
      </MetaStateContext.Provider>
    </MetaDispatchContext.Provider>
  );
};

export {
  typeStateMap,
  MetaStateContext,
  MetaDispatchContext,
  MetamaskStateProvider,
};

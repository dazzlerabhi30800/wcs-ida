import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { blogData, portfolioData, serviceData, whyChooseData } from "./constants";

// create a context (warehouse)
const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
};

//provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  //Home Page Function
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Hero Section",
        portfolioData,
        whyChooseData,
        serviceData,
        blogData,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateHomePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//consumer  / useContext

//global context hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

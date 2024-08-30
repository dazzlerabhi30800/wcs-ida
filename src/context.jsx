import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

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
        name: "HR Consultancy ",
        image: "./images/rightHeroSection.png",
      },
    });
  };

  //About Page Function
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "About Us",
        image: "./images/aboutHeroImg.png",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
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

import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  aboutUs,
  blogData,
  portfolioData,
  serviceData,
  whyChooseData,
} from "./constants";
import { aboutUs2, achievementData, teamData } from "./constants/about";

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
        aboutUs,
        portfolioData,
        whyChooseData,
        serviceData,
        blogData,
      },
    });
  };

  //Home Page Function
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "About Us",
        text: "Lorem ipsum dolor sit amet consectetur. A dictum massa at commodo sit mollis purus. Ut eu etiam interdum hendrerit pretium. Egestas magna consequat ultricies et scelerisque. Adipiscing enim sapien nam sit. Mauris.",
        aboutUs: aboutUs2,
        achievementData,
        teamData,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateHomePage,
        updateAboutPage,
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

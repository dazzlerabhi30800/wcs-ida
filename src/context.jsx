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
import { designData, whyChooseData2 } from "./constants/service";
import { accordianData, workProcessData } from "./constants/serviceDetail";
import { projectData } from "./constants/projects";

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

  //About Page Function
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

  //Service Page Function
  const updateServicePage = () => {
    return dispatch({
      type: "SERVICE_UPDATE",
      payload: {
        name: "Services",
        text: "Lorem ipsum dolor sit amet consectetur. A dictum massa at commodo sit mollis purus. Ut eu etiam interdum hendrerit pretium. Egestas magna consequat ultricies et scelerisque. Adipiscing enim sapien nam sit. Mauris.",
        whyChooseData: whyChooseData2,
        designData,
      },
    });
  };

  //Service Detail Page Function
  const updateServiceDetailPage = () => {
    return dispatch({
      type: "SERVICE_DETAIL_UPDATE",
      payload: {
        name: "Detail Services",
        text: "Lorem ipsum dolor sit amet consectetur. A dictum massa at commodo sit mollis purus. Ut eu etiam interdum hendrerit pretium. Egestas magna consequat ultricies et scelerisque. Adipiscing enim sapien nam sit. Mauris.",
        workProcessData,
        accordianData,
      },
    });
  };

  //Project Page Function
  const updateProjectPage = () => {
    return dispatch({
      type: "PROJECT_UPDATE",
      payload: {
        name: "Our Works",
        text: "Lorem ipsum dolor sit amet consectetur. A dictum massa at commodo sit mollis purus. Ut eu etiam interdum hendrerit pretium. Egestas magna consequat ultricies et scelerisque. Adipiscing enim sapien nam sit. Mauris.",
        projectData,
      },
    });
  };

  //Handle Accordian Page Function
  const updateAccordian = (id) => {
    return dispatch({
      type: "ACCORDIAN_UPDATE",
      payload: {
        id,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateHomePage,
        updateAboutPage,
        updateServicePage,
        updateServiceDetailPage,
        updateProjectPage,
        updateAccordian,
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

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
import { galleryData } from "./constants/projectDetail";
import { teamData2, workEnvironmentData } from "./constants/people";
import { blogData2 } from "./constants/blogs";
import { articleData } from "./constants/articles";
import { contactData } from "./constants/contact";

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

  //Project Page Function
  const updateProjectDetailPage = () => {
    return dispatch({
      type: "PROJECT_DETAIL_UPDATE",
      payload: {
        galleryData,
      },
    });
  };

  //People Page Function
  const updatePeoplePage = () => {
    return dispatch({
      type: "PEOPLE_UPDATE",
      payload: {
        name: "Our Innovative People",
        text: "Lorem ipsum dolor sit amet consectetur. A dictum massa at commodo sit mollis purus. Ut eu etiam interdum hendrerit pretium. Egestas magna consequat ultricies et scelerisque. Adipiscing enim sapien nam sit. Mauris.",
        workEnvironmentData,
        teamData: teamData2,
      },
    });
  };

  //Blog Page Function
  const updateBlogPage = () => {
    return dispatch({
      type: "BLOG_UPDATE",
      payload: {
        name: "Blog",
        text: "Lorem ipsum dolor sit amet consectetur. A dictum massa at commodo sit mollis purus. Ut eu etiam interdum hendrerit pretium. Egestas magna consequat ultricies et scelerisque. Adipiscing enim sapien nam sit. Mauris.",
        blogData: blogData2,
      },
    });
  };

  //Article Page Function
  const updateArticlePage = () => {
    return dispatch({
      type: "ARTICLE_UPDATE",
      payload: {
        articleData,
      },
    });
  };

  //Contact Page Function
  const updateContactPage = () => {
    return dispatch({
      type: "CONTACT_UPDATE",
      payload: {
        name: "Contact Us",
        text: "Lorem ipsum dolor sit amet consectetur. A dictum massa at commodo sit mollis purus. Ut eu etiam interdum hendrerit pretium. Egestas magna consequat ultricies et scelerisque. Adipiscing enim sapien nam sit. Mauris.",
        contactData,
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
        updateProjectDetailPage,
        updatePeoplePage,
        updateBlogPage,
        updateArticlePage,
        updateContactPage,
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

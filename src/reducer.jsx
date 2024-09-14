const reducer = (state, action) => {
  //HOME UPDATE
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      aboutUs: action.payload.aboutUs,
      portfolioData: action.payload.portfolioData,
      whyChooseData: action.payload.whyChooseData,
      serviceData: action.payload.serviceData,
      blogData: action.payload.blogData,
    };
  }

  //ABOUT UPDATE
  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      text: action.payload.text,
      aboutUs: action.payload.aboutUs,
      achievementData: action.payload.achievementData,
      teamData: action.payload.teamData,
    };
  }

  //SERVICE UPDATE
  if (action.type === "SERVICE_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      text: action.payload.text,
      whyChooseData: action.payload.whyChooseData,
      designData: action.payload.designData,
    };
  }

  //SERVICE DETAIL UPDATE
  if (action.type === "SERVICE_DETAIL_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      text: action.payload.text,
      workProcessData: action.payload.workProcessData,
      accordianData: action.payload.accordianData,
    };
  }

  //PROJECT UPDATE
  if (action.type === "PROJECT_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      text: action.payload.text,
      projectData: action.payload.projectData,
    };
  }

  //PROJECT DETAIL UPDATE
  if (action.type === "PROJECT_DETAIL_UPDATE") {
    return {
      ...state,
      galleryData: action.payload.galleryData,
    };
  }

  //PEOPLE DETAIL UPDATE
  if (action.type === "PEOPLE_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      text: action.payload.text,
      workEnvironmentData: action.payload.workEnvironmentData,
      teamData: action.payload.teamData,
    };
  }

  //BLOG UPDATE
  if (action.type === "BLOG_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      text: action.payload.text,
      blogData: action.payload.blogData,
    };
  }

  //HANDLE ACCORDIAN UPDATE
  if (action.type === "ACCORDIAN_UPDATE") {
    const id = action.payload.id;
    const newAcc = state.accordianData.map((data) => {
      if (data.id === id) {
        return { ...data, open: !data.open };
      }
      return { ...data, open: false };
    });
    return {
      ...state,
      accordianData: newAcc,
    };
  }

  return state;
};

export default reducer;

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

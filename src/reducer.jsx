const reducer = (state, action) => {
  //HOME UPDATE
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      portfolioData: action.payload.portfolioData,
      whyChooseData: action.payload.whyChooseData,
      serviceData: action.payload.serviceData,
    };
  }

  return state;
};

export default reducer;

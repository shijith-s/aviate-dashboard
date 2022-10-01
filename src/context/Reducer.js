export const initialState = {};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, ...action.data };
    case "ADD_RECOMMENDED_JOBS":
      return { ...state, recommendedJobs: action.data };
    case "REMOVE_DATA":
      return {};

    default:
      return state;
  }
};

export default reducer;

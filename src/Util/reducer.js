export const initialState = {
  user: null,
  //remove before deploying
  token:
    "BQD7igWGLBG2rIY9rU5K4LZdJ7we0Au5IzHA_tdwtFkK_F1p-ATJKO0jd-BkwE68ApxEmjTP900wTLVsvikwJM5Xj6KFMGtT8peuGmPSWZx1oyMPJf3rJLBpbSdMfyVzpxiI7dQJmv-8wf_4zsXYCz5fZ6b_QgQlYR0PsPDHq_9LUySPSAgE",
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  // Action -> type, [payload]
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_global_top_50":
      return {
        ...state,
        global_top_50: action.global_top_50,
      };
    default:
      return state;
  }
};

export default reducer;

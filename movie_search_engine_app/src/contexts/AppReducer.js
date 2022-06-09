const AppReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return {
        ...state,
        filteredMovies: state.movies.filter((movie) => {
          return movie.name
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    default:
      return {
        ...state,
        filteredMovies: state.movies,
      };
  }
};

export default AppReducer;

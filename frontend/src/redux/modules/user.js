// imports

// actions

// action creators

// initial state

//localStorage에서 jwt를 가져와서 없으면 false처리
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer funtions

// export

// reducer exports

export default reducer;

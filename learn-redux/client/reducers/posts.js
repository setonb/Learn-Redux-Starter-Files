// A reducer takes in two things.
// 1) The Action (info about what happened)
// 2) Current State
function posts(state=[], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0,i), // before the item we want
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the item we want
      ]
    default:
      return state;
  }
}

export default posts;

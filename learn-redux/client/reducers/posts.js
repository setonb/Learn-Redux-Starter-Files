// A reducer takes in two things.
// 1) The Action (info about what happened)
// 2) Current State
function posts(state=[], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;

export default(state=[], action) => {
  switch(action.type){
    case 'fetch':
      return [...action.payload];
    default:
      return state;
  }
}
const initState = [
    {contains: null},
    {contains: null}
  ]

export default(state=initState, action) => {
  switch(action.type){
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return [...state].slice(0, -1);
    default:
      return state;
  }
}
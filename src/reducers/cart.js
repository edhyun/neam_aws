export default(state=[], payload) => {
  console.log(state,payload)
  switch(payload.type){
    case 'add':
      return [...state, payload.item];
    default:
      return state;
  }
}

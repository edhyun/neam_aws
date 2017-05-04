const initState = [
  {contains: null, size: 4, isOpenEditPanel:false},
  {contains: null, size: 4, isOpenEditPanel:false},
  {contains: null, size: 4, isOpenEditPanel:false}
]

export default(state=initState, action) => {
  switch(action.type){
    case 'add':
      return [...state, {
        contains: null,
        size: 4
      }];
    case 'drop':
      return state.map((container, idx) => {
        if(idx === action.idx) {
          container.contains = action.comp
        }
        return container
      })
    case 'delete':
      return state.filter((container, idx) => idx !== action.idx)
    case 'empty':
      return state.map((container, idx) => {
        if(idx === action.idx) {
          container.contains = null
        }
        return container
      })
    case 'toggleEditPanel':
      return state.map((container, idx) => {
        if (idx === action.idx) {
          container.isOpenEditPanel = !container.isOpenEditPanel
        }
        return container
      })
    case 'incrementWidth':
      return state.map((container, idx) => {
        if (idx === action.idx && container.size < 12) {
          container.size++;
        }
        return container
      })
    case 'decrementWidth':
      return state.map((container, idx) => {
        if (idx === action.idx && container.size > 1) {
          container.size--;
        }
        return container
      })
    case 'bodyUpdate':
      console.log('body update', action.body)
      return state.map((container, idx) => {
        if (idx === action.idx) {
          container.contains.body = action.body
        }
        return container
      })
    default:
      return state;
  }
}
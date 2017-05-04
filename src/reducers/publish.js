export default (state = {previewMode: false}, action) => {
  switch(action.type) {
    case "previewModeOn":
      return {
        previewMode: true
      }
    case "previewModeOff":
      return {
        previewMode: false
      }
    default:
      return state
  }
}
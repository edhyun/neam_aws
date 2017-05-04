import { firebaseDb } from '../core/firebase'

export const fetchData = (dispatch) => {
    return new Promise((resolve, reject) => {
      let collection = []
      firebaseDb.ref('items').limitToLast(12).on('value', data => {
        data.forEach(function(i){
          collection.push(i.val())
        })
        resolve(dispatch({
          type: "fetch",
          payload: collection
        }))
      })
    })
}

export function saveItem(containers){

  return dispatch => {
    firebaseDb.ref('items').push({
      containers
    })
    .then(item => dispatch(saveItemSuccess(item)))
    .catch(error => dispatch(saveItemError(error)))
  }

  function saveItemSuccess(item){
    let payload
    item.on('value', snapshot => {
        payload = snapshot.val()
    })
    item.off()
    payload.id = item.key
    //console.log(payload)
    return {
      type: "SAVE_ITEM_SUCCESS",
      payload
    }
  }

  function saveItemError(error){
    return {
      type: "SAVE_ITEM_ERROR",
      payload: error
    }
  }
}
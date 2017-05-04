import { firebaseDb } from '../core/firebase'

export const fetchData = (dispatch) => {
  firebaseDb.ref('items').limitToLast(12).on('value', data => new Promise((resolve, reject) => {
      resolve(dispatch(
          () => ({
              type: "fetch",
              payload: data.val()
          })
      ))
  }))
}

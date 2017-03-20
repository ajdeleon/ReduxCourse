// State argument is not application state,
// only state that this reducer is responsible for
export default function(state = null, action) { //ES6, if arguments is undefined, set to null
  switch(action.type) {
  case "BOOK_SELECTED":
    return action.payload
  }
  return state
}

// All reducers get two arguments (state, action)

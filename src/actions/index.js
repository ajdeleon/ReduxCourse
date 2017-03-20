export function selectBook(book) {
  // selectBook is an action creator
  // needs to return an action
  // which is an object with TYPE property
  return {
    type: "BOOK_SELECTED",
    payload: book
  }
}

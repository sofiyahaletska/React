import { addComment } from './creators';



const AddComment = (text) => (dispatch) => {
  dispatch(addComment(text));
}



export { AddComment }
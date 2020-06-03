import ADD_COMMENT  from './actions/types';

export default function Comments(state, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, action.text] };


        default:
            return state;
    }
}
import { LOAD_COMPLAINTS, LOAD_REVIEWS } from './types';
const initialState = {
    reviews: {
        page: 1,
        data: []
    },
    complaints: {
        page: 1,
        data: []
    }
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_REVIEWS:
            return {
                ...state,
                reviews: {
                    page: state.reviews.page + 1,
                    data: state.reviews.data.concat(action.payload)
                }
            };
        case LOAD_COMPLAINTS:
            return {
                ...state,
                complaints: {
                    page: state.complaints.page + 1,
                    data: state.complaints.data.concat(action.payload)
                }
            };
        default:
            return state;
    }
}
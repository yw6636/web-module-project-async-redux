import data from '../data/gifs'
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../action'

const initialState = {
    gifs: data,
    loading: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
                error: ""
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer
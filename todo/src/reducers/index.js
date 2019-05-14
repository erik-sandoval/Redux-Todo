import { ADD_TASK } from '../actions'

const initialState = {
    items: {
        text: '',
        id: '',
        completed: false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                items: {
                    id: action.id,
                    text: action.task,
                    completed: false
                }
            }
        default:
            return state
    }

}
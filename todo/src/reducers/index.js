import { ADD_TASK } from '../actions'

const initialState = {
    tasks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { name: action.task, id: action.id, completed: false }
                ]
            }

        default:
            return state
    }

}
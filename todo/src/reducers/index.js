import { ADD_TASK, TOGGLE_TASK, RM_COMPLETED } from '../actions'

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
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task
                })
            }
        case RM_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.completed === false)
            }
        default:
            return state
    }

}
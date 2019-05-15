export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const RM_COMPLETED = 'RM_COMPLETED'

let taskId = 0

export const addTask = task => ({
    type: ADD_TASK,
    id: taskId++,
    task
})

export const toggleTask = id => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

export const rmCompleted = () => {
    return {
        type: RM_COMPLETED,
    }
}
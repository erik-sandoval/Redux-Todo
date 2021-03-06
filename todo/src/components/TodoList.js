import React from 'react'
import { connect } from 'react-redux';
import { addTask, toggleTask, rmCompleted } from '../actions'

import './TodoList.css'

class TodoList extends React.Component {
    state = {
        task: ''
    }

    handleChange = e => {
        this.setState({
            task: e.target.value
        })
    }

    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({
            task: ''
        })
    }

    toggleTask = id => {
        this.props.toggleTask(id)
    }

    rmCompleted = () => {
        this.props.rmCompleted()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Tasks</h1>
                {this.props.tasks.map(task => (
                    <div className={`${task.completed ? `strike` : ``}`}
                        onClick={() => this.toggleTask(task.id)}
                        key={task.id}><h3>{task.name}</h3></div>
                ))}
                <form onSubmit={this.addTask}>
                    <input
                        name='task'
                        onChange={this.handleChange}
                        value={this.state.task}
                    ></input>
                    <button >add task</button>
                    <button onClick={this.rmCompleted}>remove completed</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, { addTask, toggleTask, rmCompleted })(TodoList)
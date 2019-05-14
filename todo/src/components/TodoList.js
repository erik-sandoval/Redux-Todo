import React from 'react'
import { connect } from 'react-redux';
import { addTask } from '../actions'

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

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Tasks</h1>
                {this.props.tasks.map(task => (
                    <div><h3 key={task.id}>{task.name}</h3></div>
                ))}
                <form onSubmit={this.addTask}>
                    <input
                        name='task'
                        onChange={this.handleChange}
                        value={this.state.task}
                    ></input>
                    <button >add task</button>
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

export default connect(mapStateToProps, { addTask })(TodoList)
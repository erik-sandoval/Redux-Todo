import React from 'react'
import { connect } from 'react-redux';
import { addTask } from '../actions'

class TodoList extends React.Component {
    addTask = e => {
        e.preventDefault();
    }

    handleChange = e => {
        
    }

    render() {
        console.log(this.props.items.text)
        return (
            <div>
                <h1>Tasks</h1>
                
                <input 
                onChange={this.handleChange}
                value={this.props.items.text}
                ></input>
                <button onClick={this.addTask}>add task</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        items: state.items
        
    }
}

export default connect(mapStateToProps, { addTask })(TodoList)
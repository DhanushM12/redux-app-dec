import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './Task'

export class TaskList extends Component {
  render() {
    return (
      <div>
        <table>
            <thead>
                Tasks
            </thead>
            <thead>
                Actions
            </thead>
            <tbody>
                {this.props.tasks.map((task, index) => <Task key={index} task={task} />)}
            </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(TaskList)
import React, { Component } from 'react'

export class Task extends Component {
  render() {
    return (
      <div>
        <tr>
            <td>
                {this.props.task}
            </td>
        </tr>
      </div>
    )
  }
}

export default Task
import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
                <a onClick={this.props.onClickDelete} style={{float: 'right'}}>X</a>
                <a style={{float: 'right'}}>O</a>
            </li>
        );
    }
}
export default Todo;

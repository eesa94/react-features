import React, { Component } from 'react'
import './Todo.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


export class Todo extends Component {

    handleDelete = () => {
        axios.get('http://localhost:4000/todos/delete/' + this.props.todo._id)
          .then(console.log('Todo deleted'))
          .catch(err => console.log(err))
        console.log('delete');
    }
    

  render() {
    let props = this.props;

    return (
      <div>
            <div className="row todoRow mb3">
                <div className="col-4 offset-0 text-left">
                    <p className={props.todo.todo_completed ? "todoText changa2 completed" : "todoText changa2 "}>{props.todo.todo_title}</p>
                </div>
                <div className="col-4 offset-0 text-left">
                    <p className={props.todo.todo_completed ? "todoText changa2 completed" : "todoText changa2 "}>{props.todo.todo_description}</p>
                </div>
                <div className="col-4 offset-0 text-left">
                    <p className={props.todo.todo_completed ? "todoText changa2 completed" : "todoText changa2 "}>{props.todo.todo_priority}</p>
                </div>
                <div className="actionsContainer text-left">
                    <Link to={'/edit/' + props.todo._id} className="btn btn-primary btnEdit">
                        Edit
                    </Link>
                    <button className="btn btn-danger btnDelete" onClick={() => {this.handleDelete()}}>Delete</button>
                </div>
            </div>
      </div>
    )
  }
}

export default Todo

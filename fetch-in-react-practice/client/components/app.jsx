import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('./api/todos')
      .then(res => res.json())
      .then(todo => this.setState({ todos: todo }))
      .catch(error => console.error(error));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: newTodo.task,
        isCompleted: newTodo.isCompleted
      })
    }).then(res => res.json())
      .then(data => {
        const todoArray = this.state.todos;
        todoArray.slice(data);
        todoArray.push(data);
        this.setState({
          todos: todoArray
        });
      })
      .catch(error => console.error(error));
  }

  toggleCompleted(todoId) {
    const todosArray = this.state.todos;
    const targetIndex = todosArray.findIndex(todo => todo.id === todoId);
    const findId = todosArray[targetIndex];
    const isCompleted = findId.isCompleted;

    const update = {};
    update.isCompleted = !isCompleted;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    }).then(res => res.json())
      .then(todo => {
        const todoArray = this.state.todos.slice();
        todoArray[targetIndex] = todo;
        this.setState({
          todos: todoArray
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

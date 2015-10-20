var React = require('react');
var TodoListItem = require('./todo-list-item');

TodoList = React.createClass({
    render: function(){
        var todo_list = [];
        for(var key in this.props.todos){
            this.props.todos[key].key = key;
            todo_list.push(
                <TodoListItem
                    todoItem={this.props.todos[key]}
                    key={key}/>
            );
        }
        if(todo_list.length === 0){
            return(
              <div>
                <h4>Add TODOs to get started.</h4>
              </div>
            );
        } else {
            return (
                <div>
                    {todo_list}
                </div>
            );
        }
    }
});

module.exports = TodoList;
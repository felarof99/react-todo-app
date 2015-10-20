var React = require('react');
var TodoListItem = require('./todo-list-item');

TodoList = React.createClass({
    render: function(){
        var todo_list = [];
        for(var key in this.props.todos){
            //console.log(this.props.todos[key].text);
            //console.log(this.props.todos[key].done.toString());

            this.props.todos[key].key = key;
            todo_list.push(<TodoListItem
                todoItem={this.props.todos[key]}
                key={key}
                />);
        }
        return(
            <div>
                {todo_list}
            </div>
        );
    }
});

module.exports = TodoList;
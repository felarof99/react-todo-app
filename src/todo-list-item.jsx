var React = require('react');
var Firebase = require('firebase');

const RootURL = 'https://luminous-torch-1357.firebaseio.com/';

var TodoListItem = React.createClass({
    getInitialState(){
        return({
            text: this.props.todoItem.text,
            done: this.props.todoItem.done,
            textChange: false,
        });
    },
    componentWillMount: function(){
        this.fb = new Firebase(RootURL + 'todo-app/' + this.props.todoItem.key);
    },
    handleTextChange: function(event){
        this.setState({
            text: event.target.value,
        });
    },
    handleCheckboxChanged: function(event){
        console.log(event.target.checked.toString());
        var update = {done: !this.state.done};
        this.fb.update(update);
        this.setState(update);
    },
    render: function(){
        return(
            <div className="input-group">
                <span className="input-group-addon">
                    <input
                        type="checkbox"
                        checked={this.state.done}
                        onChange={this.handleCheckboxChanged}/>
                </span>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.text}
                    onChange={this.handleTextChange}/>
                <span className="input-group-btn">
                    <button
                        type="button"
                        className="btn btn-danger">
                        Delete
                    </button>
                </span>
            </div>
        )
    }
});

module.exports = TodoListItem;
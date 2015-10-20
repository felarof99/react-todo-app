var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var Header = require('./header');
var TODOList = require('./todo-list');

const RootURL = 'https://luminous-torch-1357.firebaseio.com/';

var App = React.createClass({
    mixins: [ReactFire],
    getInitialState: function(){
      return({
         'todos': {}
      });
    },
    componentWillMount: function(){
        this.fb = new Firebase(RootURL + 'todo-app/');
        this.bindAsObject(this.fb, 'todos'); //this.state.items will have your TODOs
    },
    render: function(){
        return(
            <div className="container-fluid">
                <div className="row panel panel-default">
                    <div className="col-md-6 col-offset-2">
                        <h1 className="text-center">TODO App</h1>
                        <hr />
                        <Header fbStore={this.fb}/>
                        <hr />
                        <TODOList todos={this.state.todos}/>
                    </div>
                </div>
            </div>
        );
    }
});

var element = React.createElement(App);
React.render(element, document.querySelector('.container'));
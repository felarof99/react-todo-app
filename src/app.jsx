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
            todos: {},
            dataLoaded: false,
        });
    },
    componentWillMount: function(){
        this.fb = new Firebase(RootURL + 'todo-app/');
        this.bindAsObject(this.fb, 'todos'); //this.state.items will have your TODOs
        this.fb.on('value', this.handleDataLoaded);
    },
    handleDataLoaded: function(){
        this.setState({
            dataLoaded: true,
        });
    },
    loadTODOList: function(){
        if( this.state.dataLoaded ){
            return(
                <TODOList todos={this.state.todos}/>
            );
        } else {
            return(
                <div>
                    <p>Loading your data...</p>
                </div>
            );
        }
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
                        {this.loadTODOList()}
                    </div>
                </div>
            </div>
        );
    }
});

var element = React.createElement(App);
React.render(element, document.querySelector('.container'));
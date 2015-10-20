var React = require('react');

var Header = React.createClass({
    getInitialState: function(){
      return({
         text: ''
      });
    },
    handleTextChange: function(event){
        this.setState({
           text: event.target.value
        });
    },
    handleAddBtnClick: function(){
        this.props.fbStore.push({
            text: this.state.text,
            done: false
        });
        this.setState({
           text: ''
        });
    },
    render: function(){
        return(
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Go ahead and add your TODOs..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    />
                <span className="input-group-btn">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.handleAddBtnClick}
                        >
                        Add
                    </button>
                </span>
            </div>
        );
    }
});

module.exports = Header;
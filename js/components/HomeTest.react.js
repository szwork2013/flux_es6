var React = require('react');
var TodoActions = require('../actions/TodoActions');

var HomeTest = React.createClass({
  getInitialState: function() {
    return {
      isAdded: false
    };
  },
  _onAdd: function(){
    console.log('>>> event add is emitted ...');
    TodoActions.add('test string');               
    this.setState({
      isAdded: true
    });
  },
  _onChange: function(event){
    console.log('...onChange on text input @HomeTest page');              
    console.log('value: ', event.target.value);              
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    console.log('input text\'s state.isAdded:', this.state.isAdded);
    return (
      <form>
        <span>test: </span>
        <input type="text" onChange={this._onChange}/>
        <input type="button" value="submit" onClick={this._onAdd}/>
      </form>
    );
  }
});

module.exports = HomeTest;

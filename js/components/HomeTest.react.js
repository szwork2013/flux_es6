var React = require('react');
var HomeNewItem = require('./home/HomeNewItem.react');
var IndexLogo = require('./index/Logo.react');
var Actions = require('../actions/Actions');

var HomeTest = React.createClass({
  getInitialState: function() {
    return {
      isAdded: false
    };
  },
  _onAdd: function(){
    console.log('>>> event add is emitted ...');
    Actions.add('test string');               
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
        <IndexLogo />
        <HomeNewItem />
        <span>test: </span>
        <input type="text" onChange={this._onChange}/>
        <input type="button" value="submit" onClick={this._onAdd}/>
      </form>
    );
  }
});

module.exports = HomeTest;

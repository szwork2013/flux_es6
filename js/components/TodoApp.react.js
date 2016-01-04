var React = require('react');
var IndexLogo = require('./index/Logo.react');

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <IndexLogo />
      </div>
    );
  }
});

module.exports = TodoApp;

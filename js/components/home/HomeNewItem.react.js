var React = require('react');

var HomeNewItem = React.createClass({
  render: function() {
    return (
      <div>
      <ul>
        <li>用户中心</li>
        <li><a href="/home.html?address">用户地址</a></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    );
  }
});

module.exports = HomeNewItem;

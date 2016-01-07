var React = require('react');
var Footer = require('./Footer.react');
var HomeNewItem = require('./home/HomeNewItem.react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <HomeNewItem />
        <Footer />
      </div>
    );
  }
});

module.exports = Home;

var React = require('react');

var HomeBanner = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text"/>
        <input type="button" value="submit"/>
      </form>
    );
  }
});

module.exports = HomeBanner;

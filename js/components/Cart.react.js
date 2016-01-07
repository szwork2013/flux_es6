var React = require('react');
var Cart = require('./Cart.react');
var Footer = require('./Footer.react');

var Cart = React.createClass({
  render: function() {
    return (
      <div>
        <div>购物车</div>
        <Footer />
      </div>
    );
  }
});

module.exports = Cart;

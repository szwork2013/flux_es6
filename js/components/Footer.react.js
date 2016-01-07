var React = require('react');

var Footer = React.createClass({
  render: function() {
            return (
              <ul className="xui-normal-footer">
                <li><a href="/index.html">首页</a></li>
                <li><a href="/cart.html">购物车</a></li>
                <li><a href="/order.html">订单</a></li>
                <li><a href="/home.html">我的</a></li>
              </ul>
              );
          }
});

module.exports = Footer;

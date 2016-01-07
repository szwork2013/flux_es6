console.log(window.location.pathname);
var React = require('react');
var App = require('./components/App.react');
var Products = require('./components/Products.react');
var Cart = require('./components/Cart.react');
var Home = require('./components/Home.react');
var Address = require('./components/home/Address.react');

// 初始化数据
var _count = localStorage.getItem('count'); 
var product = {
  count: _count
};

switch (window.location.pathname) {
  case '/index.html':
    React.render(
      <App />,
      document.getElementById('J_MainApp')
    );
    break;
  case '/cart.html':
    React.render(
        <div>
          <Products product={product}/>
        </div>,
      document.getElementById('J_MainApp')
    );
    break;
  case '/order.html':
    React.render(
        <div>
          <Cart />
        </div>,
      document.getElementById('J_MainApp')
    );
    break;
  case '/home.html?address':
    break;
  case '/home.html':
    if (window.location.search == '?address') {
      React.render(
        <Address />,
        document.getElementById('J_MainApp')
      );
    } else {
      React.render(
        <Home />,
        document.getElementById('J_MainApp')
      );
    }
    break;
  default:
}


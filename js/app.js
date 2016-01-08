console.log(window.location.pathname);
var React = require('react');
var App = require('./components/App.react');
var EditShoppingCart = require('./components/EditShoppingCart.react');
var Cart = require('./components/Cart.react');
var Home = require('./components/Home.react');
var Address = require('./components/home/Address.react');

// 初始化数据
var _count = localStorage.getItem('count'); 
var products = [
  { id: 1,
    name: '测试商品1',
    unit_price: 10.00,
    img_url: "/css/img/product01.jpg",
    brief: '简单的一些介绍然并卵，但总会有点用，还不够长么'
  }, { 
    id: 2,
    name: '测试商品2',
    unit_price: 20.00,
    img_url: "/css/img/product02.jpg" ,
    brief: '简单的二些介绍然并卵，但总会有点用，还不够长么'
  }
];


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
          <EditShoppingCart products={products}/>
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


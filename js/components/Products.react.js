var React = require('react');
var HomeNewItem = require('./home/HomeNewItem.react');
var IndexLogo = require('./index/Logo.react');
var Actions = require('../actions/Actions');
var Footer = require('./Footer.react');
var CartStore = require('../stores/CartStore');

var Products = React.createClass({
  getInitialState: function() {
    return {
      pid: 1100,
      productUnitPrice: 10.00,
      productPrice: 10.00,
      productCount: 1,
      shoppingCartCount: 0
    };
  },

  _ShoppingCartPlus: function(event){
    Actions.productCounterPlus(this.state);
    this.setState(CartStore.getCartValues());
  },

  _ShoppingCartMinus: function(event){
    Actions.productCounterMinus(this.state);
    this.setState(CartStore.getCartValues());
  },

  updateCounter: function() {
  },

  componentDidMount: function() {
    CartStore.addClickListener(this.updateCounter);
  },
  componentWillUnmount: function() {
    CartStore.removeClickListener(this.updateCounter);
  },
  render: function() {
    return (
        <div>
          <div>分类列表</div>
          <form>
            <IndexLogo />
            <HomeNewItem />
            <span>单价: {this.state.productUnitPrice}</span>,
            <span>数量</span>
              <input type="button" value="-" onClick={this._ShoppingCartMinus}/>
              <input type="text"  autoFocus={true} defaultValue={1} value={this.state.productCount} size="2" readOnly={true}/>
            <input type="button" value="+" onClick={this._ShoppingCartPlus}/>,
            <span>共: {this.state.productPrice}</span>
          </form>
          <Footer />
        </div>
    );
  }
});

module.exports = Products;

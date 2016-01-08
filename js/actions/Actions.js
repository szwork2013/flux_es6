var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var CartActions = {

  productCounterPlus: function(info) {
    AppDispatcher.dispatch({
      actionType: Constants.PRODUCT_COUNTER_PLUS,
      productInfo: info
    });
  },

  productCounterMinus: function(info) {
    AppDispatcher.dispatch({
      actionType: Constants.PRODUCT_COUNTER_MINUS,
      productInfo: info 
    });
  }
};

module.exports = CartActions;

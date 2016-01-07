var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CLICK_EVENT = 'click';

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case Constants.PRODUCT_COUNTER_PLUS:
      countInc(action);
      CartStore.emitClick();
      break;

    case Constants.PRODUCT_COUNTER_MINUS:
      countDec(action);
      CartStore.emitClick();
      break;

    default:
      // no op
  }
});

var _store = {};

function countInc(action) {
  var _product = action.productInfo;
  _store.pid = _product.pid;
  if (!_store.productCount) {
    _store.productCount = 1;
  }
  _store.productCount = parseInt(_store.productCount) + 1;
  productPrice(action);
};

function countDec(action) {
  var _product = action.productInfo;
  _store.pid = _product.pid;
  if (!_store.productCount) {
    _store.productCount = 1;
  }
  _store.productCount = _store.productCount*1 - 1;
  productPrice(action);
};

function productPrice(action) {
  var _product = action.productInfo;
  if (!_store.productPrice) {
    _store.productPrice = 0;
  }
  console.log('action %o: ',_product);
  _store.productPrice = _product.productUnitPrice * _store.productCount;
}

var CartStore = assign({}, EventEmitter.prototype, {
  getCartValues: function() {
    console.log(_store);
    return _store;
  },

  emitClick: function() {
    this.emit(CLICK_EVENT);
  },

  addClickListener: function(callback) {
    this.on(CLICK_EVENT, callback);
  },

  removeClickListener: function(callback) {
    this.removeListener(CLICK_EVENT, callback);
  }
});

module.exports = CartStore;

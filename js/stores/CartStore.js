var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CLICK_EVENT = 'click';

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case Constants.PRODUCT_COUNTER_PLUS:
      countInc(action.productInfo);
      CartStore.emitClick();
      break;

    case Constants.PRODUCT_COUNTER_MINUS:
      countDec(action.productInfo);
      CartStore.emitClick();
      break;

    default:
      // no op
  }
});

var _data = [];

function countInc(productInfo) {
  var _store = productInfo;
  if (!_store.productCount) {
    _store.productCount = 1;
  }
  _store.productCount = parseInt(_store.productCount) + 1;
  _data[productInfo.pid] = productPrice(_store);
  calcTotalPrice(_data);
};

function countDec(action) {
  var _store = productInfo;
  if (!_store.productCount) {
    _store.productCount = 1;
  }
  _store.productCount = parseInt(_store.productCount) - 1;
  _data[productInfo.pid] = productPrice(_store);
  calcTotalPrice(_data);
};

function productPrice(productInfo) {
  var _store = productInfo;
  if (!_store.productPrice) {
    _store.productPrice = 0;
  }
  _store.productPrice = _store.productUnitPrice * _store.productCount;
  return _store;
}

function calcTotalPrice(data) {
  console.log('calculate total price ', data);
}

var CartStore = assign({}, EventEmitter.prototype, {
  getCartValues: function(pid) {
    return _data[pid];
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

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

console.log(window.location.pathname);
var React = require('react');
var TodoApp = require('./components/TodoApp.react');
var HomeBanner = require('./components/HomeBanner.react');
var HomeTest = require('./components/HomeTest.react');

switch (window.location.pathname) {
  case '/index.html':
    React.render(
      <TodoApp />,
      document.getElementById('todoapp')
    );
    break;
  case '/home.html':
    React.render(
      <HomeBanner />,
      document.getElementById('todoapp')
    );
    break;
  case '/products.html':
    React.render(
        <div>
          <HomeBanner />
          <HomeTest />
        </div>,
      document.getElementById('todoapp')
    );
    break;
  default:
}


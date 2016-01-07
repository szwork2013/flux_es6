var React = require('react');
var IndexLogo = require('./index/Logo.react');
var Footer = require('./Footer.react');

var TodoApp = React.createClass({
  getInitialState: function() {
    console.log('   >>> initial TodoApp');
    return {
      username: '',
      lastGistUrl: ''
     };
   },
  componentDidMount: function() {
    console.log('   >>> componentDidMount ');
    var xhr=new XMLHttpRequest();
  },
  render: function() {
    return (
      <div data-url="http://weapp.weizoom.com/webapp/api/project_api/call/?design_mode=0&version=2&woid=481&module=mall&target_api=member_product_info/get&fmt=&timestamp=1451893871876&_=1451893871878">
        <IndexLogo />
        <Footer />
      </div>
    );
  }
});

module.exports = TodoApp;

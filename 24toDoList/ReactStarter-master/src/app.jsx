var React = require('react');
var ReactDOM = require('react-dom');
var reactFire = require('reactfire');
var Firebase = require('firebase');

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello yeah!
    </h1>
  }
});


var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));

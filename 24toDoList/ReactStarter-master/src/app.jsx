var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://amazignandyyytodo.firebaseio.com';

var App = React.createClass({
  mixins: [ ReactFire ],
  componentWithMount: function() {
    this.bindAsObject(now Firebase(rootUrl + 'items/'), 'items')
  },
  render: function() {
    return <h1 className="red">
      Hello yeah!
    </h1>
  }
});


var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));

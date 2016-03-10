var React = require('react');
var ReactFire = require('reactfire');
var ReactDOM = require('react-dom');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://amazignandyyytodo.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],

  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header />
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));

var React = require('react');
var ReactDOM = require('react-dom');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://amazignandyyytodo.firebaseio.com';

var App = React.createClass({
  mixins: [ ReactFireMixin ],
  componentWithMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    return <div className='container-fluid'>
      <div className='row panel panel-default'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <h2 className='text-center'>
            To-Do List
          </h2>
          <Header></Header>
        </div>
      </div>
    </div>
  }
});


var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));

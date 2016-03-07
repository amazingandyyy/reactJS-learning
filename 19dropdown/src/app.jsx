var ReactDOM = require('react-dom');
var React = require('react');
var Dropdown = require('./dropdown')

// options = { thumbnailData: [{}, {}, {} ]}
var options = {
        title: 'Choose your tutor', //What should show up on the button to open/close the dropdown
        items: [ //List of items to show in the dropdown
          'Andy Chen',
          'Derek Hsu',
          'John Alex'
        ]
};



// React, please render this class
var element = React.createElement(Dropdown, options);

// React, after you render this class, please place it in my body tag
ReactDOM.render(element, document.querySelector('.target'));

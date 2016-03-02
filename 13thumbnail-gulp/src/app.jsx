var React = require('react');
var ThumbnailList = require('./thumbnail-list')

// options = { thumbnailData: [{}, {}, {} ]}
var options = {
        thumbnailData: [{
            title: 'See Tutorials',
            number: 33,
            header: 'Learn React',
            description: 'React is fantastic new library. React is fantastic new library. React is fantastic new library. React is fantastic new library. React is fantastic new library.',
            imageUrl: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
        },{
            title: 'See Tutorials',
            number: 24,
            header: 'Learn Angular',
            description: 'Angular is fantastic new library. React is fantastic new library. React is fantastic new library. React is fantastic new library. React is fantastic new library.',
            imageUrl: 'http://adrianmejia.com/images/angularjs.png'
        },{
            title: 'See Tutorials',
            number: 14,
            header: 'Learn Meteor',
            description: 'Meteor is fantastic new library. React is fantastic new library. React is fantastic new library. React is fantastic new library. React is fantastic new library.',
            imageUrl: 'https://www.codementor.io/assets/tutorial_icon/meteor.png'
        }]
};



// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
ReactDOM.render(element, document.querySelector('.target'));

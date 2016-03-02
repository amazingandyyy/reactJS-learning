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

var Badgee = React.createClass({displayName: "Badgee",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
              this.props.title1, " ", React.createElement("span", {className: "badge"}, this.props.number1)
          )
  }
});

var ThumbnailList = React.createClass ({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps) {
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null, 
          list
        )
    }
});

var Thumbnail = React.createClass ({displayName: "Thumbnail",
    render: function () {
        return React.createElement("div", {className: "col-sm-4 "}, 
            React.createElement("div", {className: "thumbnail"}, 
              React.createElement("img", {src: this.props.imageUrl}), 
              React.createElement("div", {className: "caption"}, 
                  React.createElement("h3", null, this.props.header), 
                  React.createElement("p", null, this.props.description), 
                  React.createElement("p", null, 
                    React.createElement(Badgee, {title1: this.props.title, number1: this.props.number})
                  )
              )
            )
          )
    }
});

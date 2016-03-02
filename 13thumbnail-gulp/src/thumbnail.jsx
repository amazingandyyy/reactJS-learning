var Badge = require('badge');

var Thumbnail = React.createClass ({
    render: function () {
        return <div className="col-sm-4 ">
            <div className="thumbnail">
              <img src={this.props.imageUrl} />
              <div className="caption">
                  <h3>{this.props.header}</h3>
                  <p>{this.props.description}</p>
                  <p>
                    <Badge title1={this.props.title} number1={this.props.number} />
                  </p>
              </div>
            </div>
          </div>
    }
});

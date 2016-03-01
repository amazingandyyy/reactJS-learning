var Badgee = React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
              {this.props.title1} <span className="badge">{this.props.number1}</span>
          </button>
  }
});

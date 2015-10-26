var React = require('react');
var DefaultLayout = require('./layouts/default');

var ErrorMessage = React.createClass({
  render: function() {
    return (
        <DefaultLayout title={this.props.message}>
          <h1>{this.props.message}</h1>
          <div>{this.props.error.children}</div>
        </DefaultLayout>
    );
  }
});

module.exports = ErrorMessage;

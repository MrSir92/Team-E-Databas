/** @jsx React.DOM */

var GettingUser = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result){
      if(this.isMounted()) {
        this.setState({
          username: result.name
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h1>Välkommen, {this.state.username}!</h1>
      </div>
    );
  }
});

React.render (
  <GettingUser source="/users/14/" />,
  document.getElementById('content-fill')
);
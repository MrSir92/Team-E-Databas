/** @jsx React.DOM */

var GettingFilter = React.createClass({
  getInitialState: function() {
    return {
      : ''
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
  <GettingFilter source="/need/filter/" />,
  document.getElementById('filter-fill')
);
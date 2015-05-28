/** @jsx React.DOM */

var GettingUser = React.createClass({
  getInitialState: function() {
    return {
      all: 0,
      service: 0,
      excess: 0,
      transport: 0,
      space: 0,
      machinery: 0,
      other: 0,
      other_other: 0,
      storage: 0,
      office: 0,
      other_space: 0,
      admin: 0,
      developer: 0,
      other_service: 0,
      umea: 0,
      vannas: 0,
      lycksele: 0
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result){
      if(this.isMounted()) {
        this.setState({
          for (var i=0; i<result.length; i++) {
            if (result[i].category == 'service') { service++}
            else if (result[i].category == 'excess') { excess++}
            else if (result[i].category == 'transport') { transport++}
            else if (result[i].category == 'space') { space++}
            else if (result[i].category == 'machinery') { machinery++}
            else if (result[i].category == 'other') { other++}
            if (result[i].subcategory == 'storage') {storage++}
            else if (result[i].subcategory == 'office') { office++}
            else if (result[i].subcategory == 'other_space') { other_space++}
            else if (result[i].subcategory == 'admin') { admin++}
            else if (result[i].subcategory == 'developer') { developer++}
            else if (result[i].subcategory == 'other_other') { other_other++}
            else if (result[i].subcategory == 'other_service') { other_service++}
            if (result[i].location == 'umea') { umea++}
            else if (result[i].location == 'vannas') { vannas++}
            else if (result[i].location == 'lycksele') {lycksele++}
          }
          all == service + excess + transport + space + machinery + other;
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h1>Totalt: {this.state.all}!</h1>
      </div>
    );
  }
});

React.render (
  <GettingUser source="/offers/filter/" />,
  document.getElementById('filtersidebar')
);
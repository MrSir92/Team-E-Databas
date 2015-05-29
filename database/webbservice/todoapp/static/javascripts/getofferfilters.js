var all = 0;
var space_filter = 0;
var service_filter = 0;
var other_filter = 0;

var FilterBox = React.createClass({
  loadFiltersFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadFiltersFromServer();
    setInterval(this.loadFiltersFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="filterBox">
        <h1>Filters</h1>
        <FilterList data={this.state.data} />
      </div>
    );
  }
});

var FilterList = React.createClass({
  render: function() {
    if (all > 0) {
      all = 0;
    }
    if (space_filter > 0) {
      space_filter = 0;
    }
    if (service_filter > 0) {
      service_filter = 0;
    }
    if (other_filter > 0) {
      other_filter = 0;
    }
    for (i in this.props.data) {
      all++;
      if (this.props.data[i].category == 'space') {
        space_filter++;
      }
      if (this.props.data[i].category == 'service') {
        service_filter++;
      }
      if (this.props.data[i].category == 'other') {
        other_filter++;
      }
    } 
    return (
      <div className="filterList">
        <ul>
          <li>Alla erbjudanden: {all}</li>
          <li>Utrymme: {space_filter}</li>
          <li>Tjänster: {service_filter}</li>
          <li>Övrigt: {other_filter}</li>
        </ul>
      </div>
    );
  }
});

React.render(
  <FilterBox url="offers/filter/" pollInterval={2000} />,
  document.getElementById('filter-fill')
);
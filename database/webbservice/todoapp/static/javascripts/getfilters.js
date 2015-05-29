/** @jsx React.DOM */
var FilterBox = React.createClass({
  render: function() {
    return (
      <div className="filterBox">
        <h1>Filters</h1>
        <FilterList data={this.props.data}/>
      </div>
    );
  }
});
React.render(
  <FilterBox />,
  document.getElementById('filter-fill')
);

var FilterList = React.createClass({
  render: function() {
    var FilterNodes = this.props.data.map(function (result) {
      return (
        <Filter category={result.category}>
          {result.category}
        </Filter>
      );
    });
    return (
      <div className="filterList">
        {filterNodes}
      </div>
    );
  }
});

var Filter = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="filter">
        <h2 className="filtercategory">
          {this.props.category}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var GettingFilter = React.createClass({
  loadFiltersFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {
      data: []
      /*all: 0,
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
      lycksele: 0,
      results: []*/
    };
  },

  componentDidMount: function() {
    this.loadFiltersFromServer();
    setInterval(this.loadFiltersFromServer, this.props.pollInterval);
    /*$.get(this.props.source, function(result){
      if(this.isMounted()) {
        for (var i in result) {
          var resultss = []
          resultss[i] = result[i]
        }
        this.setState({
          for (var i in result) {
            if (result[i].category == 'space') {
              all: 1
            }
          }
         /* for (var i in result) {
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
          all = service + excess + transport + space + machinery + other;*/
          /*results: result[]
        });
      }
    }.bind(this));*/
  },

  render: function() {
    return (
      <div>
        <CommentList data={this.state.data} />
        <h1>Totalt: {this.state.data}!</h1>
      </div>
    );
  }
});

React.render (
  <GettingFilter url="offers/filter/" pollInterval={2000}/>,
  document.getElementById('content-fill')
);
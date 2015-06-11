var all = 0;
var space_filter = 0;
var service_filter = 0;
var other_filter = 0;

var umea_filter = 0;
var vannas_filter = 0;
var lycksele_filter = 0;

var storage_filter = 0;
var office_filter = 0;
var other_space_filter = 0;
var admin_filter = 0;
var other_service_filter = 0;
var other_other_filter = 0;
var toReturn = <ul></ul>;

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

var ListItem = React.createClass({
    getInitialState: function() {
        return {
            isSelected: false
        };
    },
    handleClick: function() {
        if(this.state.isSelected == false) {
          this.setState({
              isSelected: true
          })
        } else {
          this.setState({ isSelected: false})
        }
    },
    render: function() {
      
    
        var isSelected = this.state.isSelected;
        if (this.props.id=="s1" && isSelected) {
          toReturn = <ul>
                <li>Lager: {this.props.sub1}</li>
                <li>Kontor: {this.props.sub2}</li>
                <li>Övrigt: {this.props.sub3}</li>
              </ul>;
        } else if (this.props.id=="s2" && isSelected) {
          toReturn = <ul>
                <li>Administratör: {this.props.sub4}</li>
                <li>Övrigt: {this.props.sub5}</li>
              </ul>;
        }
        else {
          toReturn = <ul></ul>;
        }
        return (
            <div>
              <li id={this.props.id}className="filter_title" onClick={this.handleClick}>{this.props.content}
              </li>
              {toReturn}
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
    if (umea_filter > 0) {
      umea_filter = 0;
    }
    if (vannas_filter > 0) {
      vannas_filter = 0;
    }
    if (lycksele_filter > 0) {
      lycksele_filter = 0;
    }
    if (storage_filter > 0) {
      storage_filter = 0;
    }
    if (office_filter > 0) {
      office_filter = 0;
    }
    if (other_space_filter > 0) {
      other_space_filter = 0;
    }
    if (admin_filter > 0) {
      admin_filter = 0;
    }
    if (other_service_filter > 0) {
      other_service_filter = 0;
    }
    if (other_other_filter > 0) {
      other_other_filter = 0;
    }
    for (i in this.props.data) {
      all++;
      if (this.props.data[i].category == 'space') {
        space_filter++;
      }
      else if (this.props.data[i].category == 'service') {
        service_filter++;
      }
      else if (this.props.data[i].category == 'other') {
        other_filter++;
      }
      if (this.props.data[i].subcategory == 'storage') {
        storage_filter++;
      }
      else if (this.props.data[i].subcategory == 'office') {
        office_filter++;
      }
      else if (this.props.data[i].subcategory == 'other_space') {
        other_space_filter++;
      }
      else if (this.props.data[i].subcategory == 'admin') {
        admin_filter++;
      }
      else if (this.props.data[i].subcategory == 'other_service') {
        other_service_filter++;
      }
      else if (this.props.data[i].subcategory == 'other') {
        other_other_filter++;
      }
      if (this.props.data[i].location == 'umea') {
        umea_filter++;
      }
      else if (this.props.data[i].location == 'lycksele') {
        lycksele_filter++;
      }
      else if (this.props.data[i].location == 'vannas') {
        vannas_filter++;
      }
    } 
    return (
      <div className="filterList">
        <h2>Kategorier</h2>
          <ul className="needfilters">
          <ListItem id="e1" content={"Alla efterfrågningar:"+ all} />
          
          <ListItem id="s1" content={"Utrymme:"+ space_filter} sub1={storage_filter} sub2={office_filter} sub3={other_space_filter} />
            
            
          <ListItem id="s2" content={"Tjänster:"+ service_filter} sub4={admin_filter} sub5={other_service_filter} />
          
          <ListItem id="e2" content={"Övrigt:"+ other_filter} />
        </ul>
        <h2>Geografiskt</h2>
        <div>
        <ul>
          <li className="filter_title">Umeå: {umea_filter}</li>
          <li className="filter_title">Vännäs: {vannas_filter}</li>
          <li className="filter_title">Lycksele: {lycksele_filter}</li>
          </ul>
        </div>
      </div>
    );
  }
});

React.render(
  <FilterBox url="needs/filter/" pollInterval={10000} />,
  document.getElementById('needfiltersidebar')
);

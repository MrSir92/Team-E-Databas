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
          <ul className="needfilters" data-tab>
          <li className="filter_title"><a href="#emptybox">Alla efterfrågningar: {all}</a>
          </li>
          <li className="filter_title"><a href="#spacefilters">Utrymme: {space_filter}</a></li>
            
            
          <li className="filter_title"><a href="#servicefilters">Tjänster: {service_filter}</a></li>
          
          <li className="filter_title"><a href="#emptybox">Övrigt: {other_filter}</a></li>
        </ul>
        <div id="spacefilters" aria-hidden="true">
          <ul>
              <li>Lager: {storage_filter}</li>
              <li>Kontor: {office_filter}</li>
              <li>Övrigt: {other_space_filter}</li>
              </ul>
            </div>
            <div id="servicefilters" aria-hidden="true">
            <ul>
            <li>Administratör: {admin_filter}</li>
            <li>Övrigt: {other_service_filter}</li>
            </ul>
          </div>
          <div id="emptybox" aria-hidden="true"></div>
        <h2>Geografiskt</h2>
        <div>
          <li>Umeå: {umea_filter}</li>
          <li>Vännäs: {vannas_filter}</li>
          <li>Lycksele: {lycksele_filter}</li>
        </div>
      </div>
    );
  }
});

React.render(
  <FilterBox url="needs/filter/" pollInterval={10000} />,
  document.getElementById('needfiltersidebar')
);

$('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });
var First = "";
var Second = "";
var companyName= "";

var Need = React.createClass({
  render: function() {
    if (this.props.category == "space") {
                First = "Utrymme/"
              }
            else if (this.props.category == "service") {
              First = "Tjänster/"
            }
            else if (this.props.category == "other") {
              First = "Övrigt/"
            }
            if (this.props.subcategory == "storage") {
              Second = "Lager."
            }
            else if (this.props.subcategory == "office") {
              Second = "Kontor."
            }
            else if (this.props.subcategory == "admin") 
            {Second = "Administrativt."}
            else if (this.props.subcategory == "other_space") 
            {Second = "Övrigt_utrymme."}
            else if (this.props.subcategory == "other_service") 
            {Second = "Övrigt_tjänst."}
          if (this.props.user_id == "17") {
              companyName = "Team-E."
            }
            else if (this.props.user_id == "18") {
              companyName = "Pitchbolaget AB."
            }
    return (
      <div className="row list_row" id="list-item">
      <div className="yellow small-8 columns"></div>
      
      <a href={"needs/" + this.props.id + "/"}>
      <div className="need small-12 columns">
        <div className="small-3 columns">
          <img src={"static/" + this.props.imgfile} />
        </div>
        <div className="small-9 columns">
          <div className="small-12 columns" id="needdetail-text">
          <h4>
              {First}{Second}
              </h4>
            <h2 className="needTitle">
              {this.props.title}
            </h2>
            <h3 className="needUser">
              {companyName}
            </h3>
          </div>
        </div>
      </div></a>
      </div>
    );
  }
});



var NeedBox = React.createClass({
  loadNeedsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.results});
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
    this.loadNeedsFromServer();
    setInterval(this.loadNeedsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="needBox">
        <h1>Behöver</h1>
        <NeedList data={this.state.data} />
      </div>
    );
  }
});

var NeedList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {
    var needNodes = this.props.data.map(function(need, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Need imgfile={need.imgfile} id={need.id} title={need.title} user_id={need.user_id} location={need.location} category={need.category} subcategory={need.subcategory} created_at={need.created_at} updated_at={need.updated_at} key={index}>
          {need.title}
        </Need>
      );
    });
    return (
      <div className="needList">
      {needNodes}
      </div>
    );
  }
});

React.render(
  <NeedBox url="needs/" pollInterval={10000} />,
  document.getElementById('needlistcontainer')
);
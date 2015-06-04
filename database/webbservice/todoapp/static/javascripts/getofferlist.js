var First = "";
var Second = "";
var companyName= "";

var Offer = React.createClass({
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
      
      <a href={"offers/" + this.props.id + "/"}><div className="offer">
        <div className="small-3 columns">
          <img src={"static/" + this.props.imgfile} />
        </div>
        <div className="small-6 columns">
          <div className="small-12 columns" id="offerdetail-text">
          <h4>
              {First}{Second}
              </h4>
            <h2 className="offerTitle">
              {this.props.title}
            </h2>
            <h3 className="offerUser">
              {companyName}
            </h3>
          </div>
        </div>
      </div></a>
      </div>
    );
  }
});



var OfferBox = React.createClass({
  loadOffersFromServer: function() {
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
    this.loadOffersFromServer();
    setInterval(this.loadOffersFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="offerBox">
        <h1>Erbjudanden</h1>
        <OfferList data={this.state.data} />
      </div>
    );
  }
});

var OfferList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {
    var offerNodes = this.props.data.map(function(offer, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Offer imgfile={offer.imgfile} id={offer.id} title={offer.title} user_id={offer.user_id} location={offer.location} category={offer.category} subcategory={offer.subcategory} created_at={offer.created_at} updated_at={offer.updated_at} key={index}>
          {offer.title}
        </Offer>
      );
    });
    return (
      <div className="offerList">
      {offerNodes}
      </div>
    );
  }
});

React.render(
  <OfferBox url="offers/" pollInterval={2000} />,
  document.getElementById('listcontainer')
);
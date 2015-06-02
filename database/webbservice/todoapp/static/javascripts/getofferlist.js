var Offer = React.createClass({
  render: function() {
    return (
      <a href={"offers/" + this.props.id + "/"}><div className="offer">
        <h2 className="offerTitle">
          {this.props.title}
        </h2>
        <img src={"static/" + this.props.imgfile} />
        <h3 className="offerUser">
          {this.props.user_id}
        </h3>
        <h4 className="offerLocation">
          {this.props.location}
        </h4>
        <h4 className="offerCategory">
          {this.props.category}
        </h4>
        <h4 className="offerSubcategory">
          {this.props.subcategory}
        </h4>
        <p className="offerDescription">
          {this.props.description}
        </p>
        <p className="createdUpdated">
          Skapad: {this.props.created_at}.
        </p>
        <p>
          Uppdaterad senast: {this.props.updated_at}.
        </p>
         
      </div></a>
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
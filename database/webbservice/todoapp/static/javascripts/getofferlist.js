var Offer = React.createClass({
  render: function() {
    return (
      <a href={"offers/" + this.props.id + "/"}><div className="offer">
        <div className="small-4 columns">
          <img src={"static/" + this.props.imgfile} />
        </div>
        <div className="small-6 columns">
          <div className="small-12 columns">
            <h4 className="offerCategory">
              {% if this.props.category == "space"  %}
            Utrymme
        {% elif object.category == "service" %}
            Tjänster
        {% elif object.category == "other" %}
            Övrigt
        {% endif %}/
        {% if object.subcategory == "storage"  %}
            Lager
        {% elif object.subcategory == "office" %}
            Kontor
        {% elif object.subcategory == "admin" %}
            Administrativt
        {% elif object.subcategory == "other_space" %}
            Övrigt_utrymme
        {% elif object.subcategory == "other_service" %}
            Övrigt_tjänst
        {% endif %}
              </h4>
            <h2 className="offerTitle">
              {this.props.title}
            </h2>
          </div>
          <div className="small-12 columns">
            <h3 className="offerUser">
              {this.props.user_id}
            </h3>
          </div>
        </div>
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
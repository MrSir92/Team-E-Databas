var user = 17;
var OfferForm = React.createClass({
  getInitialState: function() {
    return {offer: true, needChange: "", offerChange: ""};
  },
  handleClick: function() {
        if(this.state.offer == false) {
          this.setState({
              offer: true
          })
        } else {
          this.setState({ offer: false})
        }
    },
    handleOfferChange: function() {
      this.setState({offerChange: event.target.value});
    },
    handleNeedChange: function() {
      this.setState({needChange: event.target.value});
    },
  handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    var category = React.findDOMNode(this.refs.category).value.trim();
    var subcategory = React.findDOMNode(this.refs.subcategory).value.trim();
    var location = React.findDOMNode(this.refs.location).value.trim();
    var description = React.findDOMNode(this.refs.description).value.trim();
    var user_id = 17;
    var imgfile = React.findDOMNode(this.refs.imgfile).value.trim();

    if (category == "other") {
      subcategory = "other_other";
    }
    if (!title || !category || !subcategory || !location || !description) {
      return;
    }

    imgfile = imgfile.toString();
    var filename = imgfile.replace(/^.*\\/, "");
    filename = "img/" + filename;
    console.log(filename);

    var toSend = {"title": title, "location": location, "user_id": 17, "category": category, "subcategory": subcategory, "description": description, "imgfile": filename };
    
    if(this.state.offer == true) {
          $.ajax({
            url: "needs/",
            dataType: 'json',
            type: 'POST',
            data: toSend,
            success: function(data) {
              React.findDOMNode(this.refs.title).value = '';
              React.findDOMNode(this.refs.category).value = 'service';
              React.findDOMNode(this.refs.subcategory).value = 'storage';
              React.findDOMNode(this.refs.location).value = 'umea';
              React.findDOMNode(this.refs.description).value = '';
              React.findDOMNode(this.refs.imgfile).value = '';
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
        } else {
          $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: toSend,
            success: function(data) {
              React.findDOMNode(this.refs.title).value = '';
              React.findDOMNode(this.refs.category).value = 'service';
              React.findDOMNode(this.refs.subcategory).value = 'storage';
              React.findDOMNode(this.refs.location).value = 'umea';
              React.findDOMNode(this.refs.description).value = '';
              React.findDOMNode(this.refs.imgfile).value = '';
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
        }
    

    
  
    return;
  },
  render: function() {
    var tabs;
    var theForm;
    var subToReturn;
    var subToReturn2;
    if (this.state.offerChange == "space") {
                var subToReturn = <select id="subcategory" ref="subcategory">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="other_space">Övrigt</option>
                </select>;
              } else if (this.state.offerChange == "service") {
                var subToReturn = <select id="subcategory" ref="subcategory">
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt</option>
                </select>;
              } else {
                var subToReturn = <select id="subcategory" ref="subcategory">
                <option value="other_other">Övrigt</option>
                </select>;
              }
    /*if (this.state.needChange == "space") {
                var subToReturn2 = <select id="subcategory" ref="subcategory">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="other_space">Övrigt_utrymme</option>
                </select>;
              } else if (this.state.needChange == "service") {
                var subToReturn2 = <select id="subcategory" ref="subcategory">
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                </select>;
              } else {
                var subToReturn2 = <select id="subcategory" ref="subcategory">
                <option value="other_other">Övrigt_övrigt</option>
                </select>;
              }*/
    if(this.state.offer == false) {
          tabs = <div><div className="button formtab active">
            <p>Posta erbjudande.</p>
          </div>
          <div className="button formtab">
            <p onClick={this.handleClick}>Posta behov.</p>
          </div>
          </div>;
          theForm = <div id="postForm"><div className="row">
          <div className="large-9 columns">
            <label>Titel
              <input type="text" ref="title" placeholder="Erbjudandets titel här..."/>
            </label>
          </div>
        </div>
        <div>
          <div>
              <input type="hidden" ref="user_id" value={user} />
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Kategori
              <select id="category" ref="category" onChange={this.handleOfferChange}>
                <option value="service">Tjänster</option>
                <option value="space">Utrymme</option>
                <option value="other" selected="selected">Övrigt</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
          <label>Subkategori
              {subToReturn}
                </label>
                </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Geografiskt
              <select id="location" ref="location">
                <option value="umea">Umeå</option>
                <option value="lycksele">Lycksele</option>
                <option value="vannas">Vännäs</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Beskrivning
              <textarea ref="description" placeholder="Erbjudandets beskrivning här..."></textarea>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Ladda upp en bild.
              <input type="file" ref="imgfile" />
            </label>
          </div>
        </div>
        <div className="row">
        <div className="small-2 columns">
          <input type="submit" id="postBtn" value="Publicera" className="button postfix" />
        </div>
        </div>
        </div>;
        } else {
          tabs = <div><div className="button formtab">
            <p onClick={this.handleClick}>Posta erbjudande.</p>
          </div>
          <div className="button formtab active">
            <p>Posta behov.</p>
          </div>
          </div>;
          theForm = <div id="postForm"><div className="row">
          <div className="large-9 columns">
            <label>Titel
              <input type="text" ref="title" placeholder="Behovets titel här..."/>
            </label>
          </div>
        </div>
        <div>
          <div>
              <input type="hidden" ref="user_id" value={user} />
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Kategori
              <select id="category" ref="category" onChange={this.handleOfferChange}>
                <option value="service">Tjänster</option>
                <option value="space">Utrymme</option>
                <option value="other" selected="selected">Övrigt</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
          <label>Subkategori
              {subToReturn}
                
                </label>
                </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Geografiskt
              <select id="location" ref="location">
                <option value="umea">Umeå</option>
                <option value="lycksele">Lycksele</option>
                <option value="vannas">Vännäs</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Beskrivning
              <textarea ref="description" placeholder="Behovets beskrivning här..."></textarea>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Ladda upp en bild.
              <input type="file" ref="imgfile" />
            </label>
          </div>
        </div>
        <div className="row">
        <div className="small-2 columns">
          <input id="postBtn" type="submit" value="Publicera" className="button postfix" />
        </div>
        </div>
        </div>;
        }
    return (
      <form onSubmit={this.handleSubmit}>
        <a className="close-reveal-modal" aria-label="Stäng">&#215;</a>
        <div className="row">
          {tabs}
        </div>
        {theForm}
      </form>
    );
  }
});

React.render(
  <OfferForm url="offers/"  />,
  document.getElementById('myModal')
);
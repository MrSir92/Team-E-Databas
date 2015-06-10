var user = 17;
var needURL = "needs/"+$("#object_id");
var leftTitle = document.getElementById.left_title;
var NeedForm = React.createClass({
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
    
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'PUT',
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

    
  
    return;
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <a className="close-reveal-modal" aria-label="Stäng">&#215;</a>
        <div className="row">
          <div className="large-9 columns">
            <label>Titel
              <input type="text" ref="title" value={leftTitle}/>
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
              <select id="category" ref="category">
                <option value="service">Tjänster</option>
                <option value="space">Utrymme</option>
                <option value="other">Övrigt</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
          <label>Subkategori
              <select id="subcategory" ref="subcategory">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                <option value="other_space">Övrigt_utrymme</option>
                <option value="other_other">Övrigt_övrigt</option>
                </select>
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
        <div className="small-2 columns">
          <input type="submit" value="Publicera" className="button postfix" />
        </div>
      </form>
    );
  }
});

React.render(
  <NeedForm url="needs/"/>,
  document.getElementById('myModal')
);
var user = 17;
var needURL = "update" //"needs/"+React.findDOMNode(object_id).value.trim();
var ntitle = document.getElementById('left_title').innerHTML.trim();
var nlocation = document.getElementById('needLocation').innerHTML.trim();
var ncategory = React.findDOMNode(object_category).value.trim();
var nsubcategory = React.findDOMNode(object_subcategory).value.trim();
var ndescription = document.getElementById('needDescription').innerHTML.trim();
var nimgfile = React.findDOMNode(object_imgfile).value.trim();
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
        //close
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    
  
    return;
  },

  render: function() {
    if (nlocation=="Umeå") {
          toReturn = <select id="location" ref="location" defaultValue="umea">
                <option value="umea">Umeå</option>
                <option value="lycksele">Lycksele</option>
                <option value="vannas">Vännäs</option>
              </select>;
        } else if (nlocation=="Lycksele") {
          toReturn = <select id="location" ref="location" defaultValue="lycksele">
                <option value="umea">Umeå</option>
                <option value="lycksele">Lycksele</option>
                <option value="vannas">Vännäs</option>
              </select>;
        } else if (nlocation=="Vännäs") {
          toReturn = <select id="location" ref="location" defaultValue="vannas">
                <option value="umea">Umeå</option>
                <option value="lycksele">Lycksele</option>
                <option value="vannas">Vännäs</option>
              </select>;
        }
          else {
            toReturn = <select></select>
          }

    if (ncategory=="space") {
          categoryReturn = <select id="category" ref="category" defaultValue="space">
                <option value="service">Tjänster</option>
                <option value="space">Utrymme</option>
                <option value="other">Övrigt</option>
              </select>;
        } else if (ncategory=="service") {
          categoryReturn = <select id="category" ref="category" defaultValue="service">
                <option value="service">Tjänster</option>
                <option value="space">Utrymme</option>
                <option value="other">Övrigt</option>
              </select>;
        } else if (ncategory=="other") {
          categoryReturn = <select id="category" ref="category" defaultValue="other">
                <option value="service">Tjänster</option>
                <option value="space">Utrymme</option>
                <option value="other">Övrigt</option>
              </select>;
        }
          else {
            categoryReturn = <select></select>
          }

    if (nsubcategory=="storage") {
          subcategoryReturn = <select id="subcategory" ref="subcategory" defaultValue="storage">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                <option value="other_space">Övrigt_utrymme</option>
                <option value="other_other">Övrigt_övrigt</option>
                </select>;
        } else if (nsubcategory=="office") {
          subcategoryReturn = <select id="subcategory" ref="subcategory" defaultValue="office">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                <option value="other_space">Övrigt_utrymme</option>
                <option value="other_other">Övrigt_övrigt</option>
                </select>;
        } else if (nsubcategory=="admin") {
          subcategoryReturn = <select id="subcategory" ref="subcategory" defaultValue="admin">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                <option value="other_space">Övrigt_utrymme</option>
                <option value="other_other">Övrigt_övrigt</option>
                </select>;
        } else if (nsubcategory=="other_service") {
          subcategoryReturn = <select id="subcategory" ref="subcategory" defaultValue="other_service">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                <option value="other_space">Övrigt_utrymme</option>
                <option value="other_other">Övrigt_övrigt</option>
                </select>;
        } else if (nsubcategory=="other_space") {
          subcategoryReturn = <select id="subcategory" ref="subcategory" defaultValue="other_space">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                <option value="other_space">Övrigt_utrymme</option>
                <option value="other_other">Övrigt_övrigt</option>
                </select>;
        } else if (nsubcategory=="other_other") {
          subcategoryReturn = <select id="subcategory" ref="subcategory" defaultValue="other_other">
                <option value="storage">Lager</option>
                <option value="office">Kontor</option>
                <option value="admin">Administration</option>
                <option value="other_service">Övrigt_tjänst</option>
                <option value="other_space">Övrigt_utrymme</option>
                <option value="other_other">Övrigt_övrigt</option>
                </select>;
        }
          else {
            subcategoryReturn = <select></select>
          }
    return (
      <form onSubmit={this.handleSubmit}>

        <a className="close-reveal-modal" aria-label="Stäng">&#215;</a>
        <div className="row">
          <div className="large-9 columns">
            <label>Titel
              <input type="text" ref="title" defaultValue={ntitle}/>
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
              {categoryReturn}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
          <label>Subkategori
                  {subcategoryReturn}
                </label>
                </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Geografiskt
                {toReturn}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Beskrivning
              <textarea ref="description" defaultValue={ndescription}></textarea>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-9 columns">
            <label>Ladda upp en bild.
              <input type="file" ref="imgfile" defaultValue={nimgfile}/>
            </label>
          </div>
        </div>
        <div className="small-2 columns">
          <input type="submit" value="Spara" className="button postfix" />
        </div>
      </form>
    );
  }
});

React.render(
  <NeedForm url={""+needURL}/>,
  document.getElementById('myModal')
);
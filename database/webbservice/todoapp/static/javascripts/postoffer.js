var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.author).value.trim();
    var category = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="offerForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Titel för erbjudandet" ref="title" />
        <input type="text" placeholder="Kategori" ref="category" />
        <input type="text" placeholder="Subkategori" ref="subcategory" />
        <input type="text" placeholder="Geografiskt" ref="location" />
        <input type="textarea" placeholder="Beskrivning för erbjudandet..." ref="description" />
        <input type="hidden" ref="user_id"
        <input type="submit" value="Post" />
      </form>
    );
  }
});
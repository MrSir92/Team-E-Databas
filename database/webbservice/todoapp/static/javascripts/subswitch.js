var theSelected = React.createClass({
  getInitialState: function() {
    return {
      sublist1: true,
      sublist2: false,
      clicked: ""
    }
  },
  select: function(item) {
    this.props.selected = item;
    this.setState({clicked = item.value});
  },
        
  show: function() {
    this.setState({ sublist1: true, sublist2: false });
    document.addEventListener("click", this.hide);
  },
        
  hide: function() {
    this.setState({ sublist1: false, sublist2: true});
    document.removeEventListener("click", this.hide);
  },
  render: function() {
    return(
        <div className="large-9 columns">
        {this.renderSubItems()}
          </div>
      );
  },

  renderSubItems: function() {
    if (this.state.clicked == "service") {
      

    }
    else if (this.state.clicked == "space") {
      <label>Subkategori
              <select id="subcategory" ref="subcategory">
                
                </select>
                </label>
    }
    else if (this.state.clicked == "other") {
      <label>Subkategori
              <select id="subcategory" ref="subcategory">
      
      </select>
                </label>
    }

  }
});

React.render(
  <theSelected />,
  document.getElementById('subholder')
);
import React, {Component} from 'react';
import marked from 'marked';

export var HighLighter = ComposedComponents => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedText: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    const {query, text } = nextProps;
    const regex = new RegExp("(" + query + ")", "gi");
    const mdtoHTML = marked(text);

    let HTMLString = mdtoHTML.toString();

    const queries = query.split(" ");
    if (queries.length > 2) {
      
      queries.forEach((query) => {
        if (query === "") return;
        const reg = new RegExp(query.trim(), 'g');
        HTMLString = HTMLString.replace(reg, function(str) {return '<tag>'+str+'</tag>'});
      })
    } else {
      const reg = new RegExp(query.trim(), 'g');
      HTMLString = HTMLString.replace(reg, function(str) {return '<tag>'+str+'</tag>'});
    }

    this.setState({highlightedText: HTMLString })
  }

  render() {
    return <ComposedComponents {...this.props} highlighter={this.state.highlightedText}/>
  }
}


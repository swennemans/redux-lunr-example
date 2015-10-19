import React, {Component} from 'react';

export var HighLighter = ComposedComponents => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedText: '',
    }
  }

  //componentDidMount() {
  //  const {query, text } = this.props;
  //  const regex = new RegExp("(" + query + ")", "gi");
  //  const highlightedText = "<span>"+text.replace(regex, "<strong>$1</strong>")+"</span>"
  //  this.setState({highlightedText})
  //}

  componentWillReceiveProps(nextProps) {
    const {query, text } = nextProps;
    const regex = new RegExp("(" + query + ")", "gi");
    const highlightedText = "<span>"+text.replace(regex, "<strong>$1</strong>")+"</span>"

    this.setState({highlightedText})
  }

  render() {
    return <ComposedComponents {...this.props} highlighter={this.state.highlightedText}/>
  }
}


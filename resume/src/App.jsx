import React, { Component } from 'react';
import './App.css';
import urlDP from './images/DP_V1.jpg' 
import utils from './utils.js'
import data from './data.js'
import { markdown } from 'markdown';

class DP extends Component {
  constructor(props) {
    super(props)
    
    this.classMap = {
      "big": "dp-big",
      "small": "dp-small",
      "med": "dp-med",
      "circle": "dp-circle"
    }
    
    this.state = {
      size: props.size,
      shape: props.shape
    }
  }
  
  render() {
    console.log(utils)
    return (
      <div className = {utils.classNames([this.classMap[this.state.shape], this.classMap[this.state.size], "dp-holder"])}>
        <div></div>
        <img src={urlDP} alt="Display Picture" />
      </div>
    );
  }
}
DP.defaultProps = {
  size: "med",
  shape: "circle"
}

class Polygon extends Component {
  constructor(props) {
    super(props)
    
    this.classMap = {
      "big": "",
      "small": "polygon-small",
      "xs": "polygon-xs",
      "alt": "polygon-alt"
    }
    
    this.state = {
      size: props.size,
      title: props.title,
      clickable: props.clickable
    }
  }
  
  componentWillReceiveProps (newProps) {
    this.state = {
      size: newProps.size,
      title: newProps.title,
      clickable: newProps.clickable
    }
  }
  
  render() {
    return (
      <div onClick={() => this.props.move(this.props.link)} className = {utils.classNames(["polygon", this.classMap[this.state.size], this.props.alt ? this.classMap['alt'] : "", this.state.clickable ? "polygon-click" : ""])}>
        {this.state.title}
      </div>
    )
  }
}

class Landing extends Component {  
  render() {
    return (
      <div className="landing">
        <div className="dp">
          <DP size="big"/>
        </div>
        <TypingAnimation htmlContent="Might get my self a Unicorn in the Next 3 Years!" typingSpeed={100}/>
        <div className="menus">
          <div>
            <Polygon title = "Education" clickable={true} link={["Content", "Education"]} move={this.props.move} size="small"/>
            <Polygon title = "Prafulla Pallal"/>
            <Polygon title = "Work" clickable={true} link={["Content", "Work"]} move={this.props.move} size="small"/>
          </div>
        </div>
      </div>
    )
  }
}

class Content extends Component {
  
  constructor (props) {
    super(props)
    
    this.state = {
      page: this.props.page,
      data: null,
      move: this.props.move
    }
    var pageData
    pageData = utils.obtainData(this.state.page, data)
    this.state.data = pageData
    
  }
  
  componentWillReceiveProps (newProps) {
    this.setState({
      page: newProps.page,
      data: utils.obtainData(newProps.page, data),
    })
  }
  
  render() {
    var st;
    st = this.state
    return (
      <div>
        <div className = "left-pane">
          <div className="pointer" onClick = {() => this.props.move(["Landing"])}>
            <DP size="med"/>
            <Polygon size="small" title="Prafulla Pallal"/>
          </div>
        </div>
        <div className="right-pane">
          {this.state.page.map(function(i, k, arr){
           console.log(k, arr.length)
           if (k === arr.length-1) return <Polygon title={i}/>;
           else if (k>=1) {return <Polygon link={arr.slice(0, k+1)} clickable={true} move={st.move} size="small" title={i}/>;}
          })}
          <div>
          <TypingAnimation htmlContent={markdown.toHTML(this.state.data.info, "Maruku")} />
          </div>
          <div className="links">
            {this.state.data.children_order.map(function(i, k, arr){
              return <Polygon size="xs" alt={true} clickable={true} link={st.page.concat([i])} move={st.move} title={i} />;
            })}
          </div>
        </div>
      </div>
    )
  }
}

class TypingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
      currentIndex: 0,
      isTyping: true,
      showFormatted: false
    };
    this.words = [];
    this.typingSpeed = props.typingSpeed || 10; // milliseconds per word, default 10
  }

  componentDidMount() {
    this.processContent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.htmlContent !== this.props.htmlContent) {
      this.processContent();
    }
  }

  processContent() {
    // Extract text content from HTML and split into words
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.props.htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    this.words = textContent.split(/\s+/).filter(word => word.length > 0);
    this.setState({ displayText: '', currentIndex: 0, isTyping: true, showFormatted: false }, () => {
      this.startTyping();
    });
  }

  startTyping() {
    if (this.words.length === 0) return;
    
    const typeNextWord = () => {
      if (this.state.currentIndex < this.words.length) {
        this.setState(prevState => ({
          displayText: prevState.displayText + (prevState.displayText ? ' ' : '') + this.words[prevState.currentIndex],
          currentIndex: prevState.currentIndex + 1
        }), () => {
          setTimeout(typeNextWord, this.typingSpeed);
        });
      } else {
        this.setState({ isTyping: false }, () => {
          // After typing is complete, show formatted content
          setTimeout(() => {
            this.setState({ showFormatted: true });
          }, 500); // Wait 500ms after typing completes
        });
      }
    };
    
    typeNextWord();
  }

  render() {
    return (
      <div className="note typing-container">
        <div 
          className={`formatted-content ${this.state.showFormatted ? 'show' : ''}`} 
          dangerouslySetInnerHTML={{__html: this.props.htmlContent}} 
        />
        <div className={`typing-overlay ${this.state.showFormatted ? 'fade-out' : ''}`}>
          <span>{this.state.displayText}</span>
          {this.state.isTyping && <span className="typing-cursor">|</span>}
        </div>
      </div>
    );
  }
}

TypingAnimation.defaultProps = {
  typingSpeed: 10
}

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: ["Landing"]
//      page: ["Content", "Education", "B.E."]
//      page: ["Content", "Personal"]
    }
    console.log(data);
    this.updateState = this.updateState.bind(this);
  }
  
  updateState(page) {
    this.setState({page: page})
  }
  
  render() {
    if (this.state.page[0] == "Landing") {
      return (
        <div className="body">  
          <Landing move={this.updateState}/>
        </div>
      )
    } else if (this.state.page[0] == "Content") {
      return (
        <div className="body">
          <Content move={this.updateState} page={this.state.page}/>
        </div>
      )
    }
  }
}

export default App;

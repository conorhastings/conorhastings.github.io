import React, { Component } from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import zenburn from 'react-syntax-highlighter/dist/styles/zenburn';
import code from './code';

class Code extends Component {
  constructor() {
    super();
    this.state = { codeBlock: code['html'], language: 'html', type: 'html' };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const newLang = event.newURL && event.newURL.split("#")[1];
      if (newLang) {
        const language = newLang === 'html' ? 'html' : 'javascript';
        const type = newLang === 'psow' ? 'put-stuff-on-website' : newLang;
        this.setState({ codeBlock: code[newLang], language, type });
      }
    });
  }

  render() {
    return (
      <div style={{fontFamily: 'monaco, Consolas, Lucida Console, monospace', width: '70%'}}>
        <h1>{this.state.type} code</h1>
        <SyntaxHighlighter language={this.state.language} style={zenburn}>
          {this.state.codeBlock}
        </SyntaxHighlighter>
      </div>
    );
  }
}

render(<Code />, document.getElementById('code'));

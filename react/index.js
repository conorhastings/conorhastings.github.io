import React from 'react';
import { render } from 'react-dom';

const projects = [
  {
    name: 'redux test recorder',
    link: 'https://github.com/conorhastings/redux-test-recorder',
    demoLink: 'http://conor.rodeo/redux-test-recorder/demo/',
    extra: (
      <span>
        <a href="http://conor.rodeo/todo-mvc-redux-test-recorder">(another demo)</a>
        <a href="https://www.youtube.com/watch?v=It7jU4uKxSk">(my talk at react europe)</a>
      </span>
    )
  },
  {
    name: 'react syntax highlighter',
    link: 'https://github.com/conorhastings/react-syntax-highlighter',
    demoLink: 'http://conor.rodeo/react-syntax-highlighter/demo/'
  },
  {
    name: 'react user tour',
    link: 'https://github.com/socialtables/react-user-tour',
    demoLink: 'http://socialtables.github.io/react-user-tour/demo/'
  },
  {
    name: 'react emoji react',
    link: 'https://github.com/conorhastings/react-emoji-react',
    demoLink: 'http://conor.rodeo/react-emoji-react/demo/'
  },
  {
    name: 'react image fallback',
    link: 'https://github.com/socialtables/react-image-fallback',
    demoLink: 'http://socialtables.github.io/react-image-fallback/demo/'
  },
  {
    name: 'redux unhandled action',
    link: 'https://github.com/socialtables/redux-unhandled-action'
  },
  {
    name: 'react component demo',
    link: 'https://github.com/conorhastings/react-component-demo',
    demoLink: 'http://conor.rodeo/react-component-demo'
  },
  {
    name: 'apply loader after first build webpack plugin',
    link: 'https://github.com/conorhastings/apply-loader-after-first-build-webpack-plugin',
  }
];

function Project({ link, name, demoLink, extra }) {
  const projectLink = <a href={link}>{name}</a>;
  const demo = demoLink ? <a href={demoLink}>(demo)</a> : null;
  return <li>{projectLink} {demo}{extra}</li>;
}
function Webpage({ projects }) {
  const listElements = projects.map(project => (
    <Project 
      key={project.name}  
      name={project.name}
      link={project.link} 
      demoLink={project.demoLink} 
      extra={project.extra} 
    /> 
  ));
  return (
    <div style={{fontFamily: 'monaco, Consolas, Lucida Console, monospace'}}>
      <h2>
          hi, i am conor hastings, a web developer/software engineer/some other name that means i make stuff on the internet
      </h2>
      <p>i like javascript, also functional programming, i mostly write react things now, but i'll try anything</p>
      <div>
        <a href="http://github.com/conorhastings">github</a> | <a href="http://twitter.com/stillconor">twitter</a>
        <p>
            (imagine the twitter link has a bird icon and the github link has the github picture thingy, i don't feel like finding the images and putting them in, 
            imagination is a key skill in life and you should learn it now if you have not. you're welcome.)
        </p>
        <h2>some things i've worked on that i like</h2>
        <ul>
          {listElements}
        </ul>
      </div>
    </div>
  );
}

render(<Webpage projects={projects} />, document.getElementById('app'));

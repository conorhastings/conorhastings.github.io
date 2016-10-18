export default {
  html: `<div style='font-family: monaco, Consolas, Lucida Console, monospace;'>
    <h2>
        hi, i am conor hastings, a web developer/software engineer/some other name that means i make stuff on the internet
    </h2>
    <p>i like javascript, also functional programming, i mostly write react things now, but i'll try anything</p>
    <div>
        <a href="http://github.com/conorhastings">github</a> | 
        <a href="http://twitter.com/stillconor">twitter</a>
        <p>
            (imagine the twitter link has a bird icon and the github link has the github picture thingy, i don't feel like finding the images and putting them in, 
            imagination is a key skill in life and you should learn it now if you have not. you're welcome.)
        </p>
        <h2>some things i've worked on that i like</h2>
        <ul>
            <li><a href="https://github.com/conorhastings/redux-test-recorder">redux test recorder</a> <a href="http://conor.rodeo/redux-test-recorder/demo/">(demo)</a><a href="http://conor.rodeo/todo-mvc-redux-test-recorder">(another demo)</a><a href="https://www.youtube.com/watch?v=It7jU4uKxSk">(my talk at react europe)</a></li>
            <li><a href="https://github.com/conorhastings/react-syntax-highlighter">react syntax highlighter</a> <a href="http://conor.rodeo/react-syntax-highlighter/demo/">(demo)</a></li>
            <li><a href="https://github.com/socialtables/react-user-tour">react user tour</a> <a href="http://socialtables.github.io/react-user-tour/demo/">(demo)</a></li>
            <li><a href="https://github.com/conorhastings/react-emoji-react">react emoji react</a> <a href="http://conor.rodeo/react-emoji-react/demo/">(demo)</a></li>
            <li><a href="https://github.com/socialtables/react-image-fallback">react image fallback</a> <a href="http://socialtables.github.io/react-image-fallback/demo/">(demo)</a></li>
            <li><a href="https://github.com/socialtables/redux-unhandled-action">redux unhandled action</a></li>
            <li><a href="https://github.com/conorhastings/react-component-demo">react component demo</a><a href="http://conor.rodeo/react-component-demo"> (demo)</a></li>
            <li><a href="https://github.com/conorhastings/apply-loader-after-first-build-webpack-plugin">apply loader after first build webpack plugin</a></li>
        </ul>
    </div>
</div>`,
  react: `import React from 'react';
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

render(<Webpage projects={projects} />, document.getElementById('app'));`,
  vanilla: `var projects =  [
  {
    name: 'redux test recorder',
    link: 'https://github.com/conorhastings/redux-test-recorder',
    demoLink: 'http://conor.rodeo/redux-test-recorder/demo/',
    extra: () => {
      const span = document.createElement('span');
      span.innerHTML = '<a href=\'http://conor.rodeo/todo-mvc-redux-test-recorder\'>(another demo)</a><a href=\'https://www.youtube.com/watch?v=It7jU4uKxSk\'>(my talk at react europe)</a>';
      return span;
    }
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
  const li = document.createElement('li');
  const projectLink = document.createElement('a');
  projectLink.href = link;
  projectLink.innerText = name;
  li.appendChild(projectLink);
  if (demoLink) {
    const span = document.createElement('span');
    span.innerText = ' ';
    const demo = document.createElement('a');
    demo.href = demoLink;
    demo.innerText = '(demo)';
    span.appendChild(demo);
    li.appendChild(span);
  }
  if (extra) {
    li.appendChild(extra());
  }
  return li;
}
function Webpage({ projects }) {
  const listElements = projects.map(project => (Project(project)));
  const outerDiv = document.createElement('div');
  outerDiv.style.fontFamily = 'monaco, Consolas, Lucida Console, monospace';
  const intro = document.createElement('h2');
  intro.innerText = 'hi, i am conor hastings, a web developer/software engineer/some other name that means i make stuff on the internet';
  outerDiv.appendChild(intro);
  const interests = document.createElement('p');
  interests.innerText = "i like javascript, also functional programming, i mostly write react things now, but i'll try anything";
  outerDiv.appendChild(interests);
  const innerDiv = document.createElement('div');
  innerDiv.innerHTML = \`
    <a href='http://github.com/conorhastings'>github</a> | <a href='http:///twitter.com/stillconor'>twitter</a>
    <p>(imagine the twitter link has a bird icon and the github link has the github picture thingy, i don't feel like finding the images and putting them in, 
imagination is a key skill in life and you should learn it now if you have not. you're welcome.)</p>
    <h2>some things i've worked on that i like</h2>
  \`;
  const ul = document.createElement('ul');
  listElements.forEach(li => ul.appendChild(li));
  innerDiv.appendChild(ul);
  outerDiv.appendChild(innerDiv);
  document.getElementById('app').innerHTML = '';
  document.getElementById('app').appendChild(outerDiv);
}

Webpage({ projects });`,
  psow: `import { render } from 'put-stuff-on-website';
const projects =  [
  {
    name: 'redux test recorder',
    link: 'https://github.com/conorhastings/redux-test-recorder',
    demoLink: 'http://conor.rodeo/redux-test-recorder/demo/',
    extra: {
      tagName: 'span',
      children: [
        {
          tagName: 'a',
          props: { href: 'http://conor.rodeo/todo-mvc-redux-test-recorder' },
          children: '(another demo)'
        },
        {
          tagName: 'a',
          props: { href: 'https://www.youtube.com/watch?v=It7jU4uKxSk' },
          children: '(my talk at react europe)'
        }
      ]
    }
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
  const component = {
    tagName: 'li',
    children: [
      {
        tagName: 'a',
        props: { href: link },
        children: name
      }
    ]
  }
  if(demoLink) {
    component.children.push({
      tagName: 'a',
      props: { href: demoLink },
      children: ' (demo)'
    });
  } 
  if (extra) {
    component.children.push(extra);
  }
  return component;
}
function Webpage({ projects }) {
  const listElements = projects.map(project => (Project(project)));
  return {
    tagName: 'div',
    props: { style: { fontFamily: 'monaco, Consolas, Lucida Console, monospace'}},
    children: [
      {
        tagName: 'h2',
        children: 'hi, i am conor hastings, a web developer/software engineer/some other name that means i make stuff on the internet'
      },
      {
        tagName: 'p',
        children: "i like javascript, also functional programming, i mostly write react things now, but i\'ll try anything"
      },
      {
        tagName: 'div',
        children: [
          {
            tagName: 'a',
            props: { href: 'http://github.com/conorhastings' },
            children: 'github'
          },
          {
            tagName: 'span',
            children: ' | '
          },
          {
            tagName: 'a',
            props: { href: 'http://twitter.com/stillconor' },
            children: 'twitter'
          },
          {
            tagName: 'p',
            children: \`(imagine the twitter link has a bird icon and the github link has the github picture thingy, i don't feel like finding the images and putting them in, imagination is a key skill in life and you should learn it now if you have not. you're welcome.)\`
          },
          {
            tagName: 'h2',
            children: "some things i've worked on that i like"
          },
          {
            tagName: 'ul',
            children: listElements
          }
        ]
      }
    ]
  }
}

render(Webpage({ projects }), '#app');`
}
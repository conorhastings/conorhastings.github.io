import { render } from 'put-stuff-on-website';
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
    component.children.push(
      { tagName: 'span', children: ' '},
      {
        tagName: 'a',
        props: { href: demoLink },
        children: ' (demo)'
      }
    );
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
        children: 'i like javascript, also functional programming, i mostly write react things now, but i\'ll try anything'
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
            children: `(imagine the twitter link has a bird icon and the github link has the github picture thingy, i don't feel like finding the images and putting them in, imagination is a key skill in life and you should learn it now if you have not. you're welcome.)`
          },
          {
            tagName: 'h2',
            children: 'some things i\'ve worked on that i like'
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

render(Webpage({ projects }), '#app');
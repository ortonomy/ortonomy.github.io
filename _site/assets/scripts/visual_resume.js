const content = [
  {
    type: 'icon',
    data: {
      icon: 'fast-forward'
    }
  },
  {
    type: 'divider',
    data: null
  },
  {
    type: 'entryLeft',
    data: {
      title: 'Product Owner',
      organization: 'EIC Education',
      location: 'Shangai, China',
      date: ['April 2018','Present'],
      description: 'Define product vision and measure of value delivered. Manage and drive product pipeline, design, and development.',
      icon: 'wrench'
    }
  },
  {
    type: 'divider',
    data: null
  },
  {
    type: 'entryRight',
    data: {
      title: 'Product manager',
      organization: 'EF Education First',
      location: 'Shanghai, China',
      date: ['September 2016','April 2018'],
      description: 'Improve, enhance, and maintain business criticla content delivery services and systems for the digital classroom and digital learning materials.',
      icon: 'code'
    }
  },
  {
    type: 'divider',
    data: null
  },
  {
    type: 'entryLeft',
    data: {
      title: 'Development Editor',
      organization: 'EF Education First',
      location: 'Shanghai, China',
      date: ['November 2013','September 2016'],
      description: 'Product design and innovation for mobile learning experiences; Content writing and editing for digital learning materials.',
      icon: 'pencil'
    }
  },
  {
    type: 'divider',
    data: null
  },
  {
    type: 'entryRight',
    data: {
      title: 'Center Manager',
      organization: 'EF Education First',
      location: 'Guangzhou, China',
      date: ['April 2010','November 2013'],
      description: 'Manage a team of teaching talent, providing feedback and development plans and encouraging growth through reflective practice.',
      icon: 'book'
    }
  },
  {
    type: 'divider',
    data: null
  },
  {
    type: 'entryLeft',
    data: {
      title: 'IT Manager',
      organization: 'Various',
      location: 'United Kingdom & Australia',
      date: ['October 2005','April 2010'],
      description: 'IT management roles for various companies and organizations. System & network administration and intranet development.',
      icon: 'rocket'
    }
  },
  {
    type: 'divider',
    data: null
  },
  {
    type: 'entryRight',
    data: {
      title: 'Computer Science',
      organization: 'University of Reading',
      location: 'Reading, United Kingdom',
      date: ['October 2002','June 2005'],
      description: '3-year undegraduate degree. Awarded a Bachelor of Science with Honours.',
      icon: 'graduation-cap'
    }
  },
  {
    type: 'divider',
    data: null
  },
  {
    type: 'icon',
    data: {
      icon: 'play-circle-o'
    }
  }
];

( (content) => {
  // grab container
  const container = document.querySelector('article.container');
  
  // grab templates
  const divider = document.querySelector('#divider');
  const dividerIcon = document.querySelector('#divider-icon');
  const entryLeft = document.querySelector('#entry-start-left');
  const entryRight = document.querySelector('#entry-start-right');
  
  
  // functions to create sections
  const createDivider = () => {
    return document.importNode(divider.content,true);
  }
  
  const createIconDivider = (icon) => {
    const template = document.importNode(dividerIcon.content, true);
    const center = template.querySelector('.divider > .center');
    center.innerHTML = `<span><i class="fa fa-${icon}"></i></span>`;
    return template;
  }
  
  const createEntryLeft = (config) => {
    const template = document.importNode(entryLeft.content, true);
    const left = template.querySelector('.left.role');
    const right = template.querySelector('.right.details');
    const center = template.querySelector('.center.line');
    left.children[0].innerHTML = `${config.title}`;
    left.children[1].innerHTML = `${config.organization}`;
    left.children[2].innerHTML = `${config.location}`;
    left.children[3].innerHTML = `${config.date[0]}-${config.date[1]}`;
    right.children[0].innerHTML = `${config.description}`;
    const icon = document.createElement('div');
    icon.innerHTML = `<i class="fa fa-${config.icon}"></i>`;
    icon.classList.add('entry-icon');
    center.appendChild(icon);
    return template; 
  }
  
  const createEntryRight = (config) => {
    const template = document.importNode(entryRight.content, true);
    const left = template.querySelector('.left.details');
    const right = template.querySelector('.right.role');
    const center = template.querySelector('.center.line');
    right.children[0].innerHTML = `${config.title}`;
    right.children[1].innerHTML = `${config.organization}`;
    right.children[2].innerHTML = `${config.location}`;
    right.children[3].innerHTML = `${config.date[0]}-${config.date[1]}`;
    left.children[0].innerHTML = `${config.description}`;
    const icon = document.createElement('div');
    icon.innerHTML = `<i class="fa fa-${config.icon}"></i>`;
    icon.classList.add('entry-icon');
    center.appendChild(icon);
    return template;
  }

  // render content
  content.forEach( (el) => {
    switch (el.type) {
      case 'icon': {
        container.appendChild(createIconDivider(el.data.icon));
        break;
      }
      case 'divider': {
        container.appendChild(createDivider());
        break;
      }
      case 'entryLeft': {
        container.appendChild(createEntryLeft(el.data));
        break;
      }
      case 'entryRight': {
        container.appendChild(createEntryRight(el.data));
        break;
      }
      default: {
        break;
      }
    }
  })
  
})(content)
'use strict';

export function linkStylesheet(href) {
  
  let head = document.head;
  let link = document.createElement('link');
  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.href = href;
  head.appendChild(link)
}
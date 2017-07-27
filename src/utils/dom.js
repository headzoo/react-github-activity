export function linkStylesheet(href) {
  const head = document.head;
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.href = href;
  head.appendChild(link);
}

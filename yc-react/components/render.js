const renderElem = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName);

  // set attributes
  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  // set children
  for (const child of children) {
    const $child = render(child);
    $el.appendChild($child);
  }

  return $el;
};

const renderTextNode = vNode => document.createTextNode(vNode);

const render = vNode => {
  if (typeof vNode === "string") {
    return renderTextNode(vNode);
  }
  return renderElem(vNode);
};

export default render;

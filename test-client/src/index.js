import { createElement, render, mount, diff } from "../../yc-react";

const createVApp = count =>
  createElement("div", {
    attrs: {
      id: "app",
      dataCount: count
    },
    children: [
      String(count),
      ...Array.from({ length: count }, () =>
        createElement("img", {
          attrs: {
            src: "http://www.reactiongifs.com/r/dimi.gif"
          }
        })
      )
    ]
  });

const count = 0;
let vApp = createVApp(count);
const $app = render(vApp);

// eslint-disable-next-line
let $rootEl = mount($app, document.getElementById("app"));

// eslint-disable-next-line
setInterval(() => {
  const vNewApp = createVApp(Math.floor(Math.random() * 10));
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
}, 1000);

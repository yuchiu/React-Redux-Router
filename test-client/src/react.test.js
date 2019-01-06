import createElement from "../../yc-react/createElement";
import render from "../../yc-react/render";
import mount from "../../yc-react/mount";
import diff from "../../yc-react/diff";

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
            src: "https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif"
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

import createElement from "../../yc-react/createElement";
import render from "../../yc-react/render";
import mount from "../../yc-react/mount";

const vApp = createElement("div", {
  attrs: {
    id: "app"
  },
  children: [
    createElement("img", {
      attrs: {
        src: "https://media.giphy.com/media/l4KhPbIIDgO3sMw0w/giphy.gif"
      }
    })
  ]
});

const $app = render(vApp);

// eslint-disable-next-line
mount($app, document.getElementById("app"));

console.log($app);

const createElement =
  (mode = "open") =>
  (strs, ...substs) => {
    const str =
      typeof strs === "string"
        ? strs
        : substs.reduce((prev, cur, i) => prev + cur + strs[i + 1], strs[0]);
    //https://gomakethings.com/converting-a-string-into-markup-with-vanilla-js/
    const node = new DOMParser().parseFromString(str, "text/html").body;
    return class extends globalThis.HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode }).append(...node.cloneNode(true).childNodes);
      }
    };
  };

export const shadowOpen = createElement("open");
export const shadowClosed = createElement("closed");

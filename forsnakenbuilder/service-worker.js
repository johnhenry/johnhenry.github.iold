(() => {
  // std/js/router@0.0.0/index.mjs
  var updateRequest = async (oldRequest, newURL, newInit = {}) => {
    const oldInit = {};
    for (const key of Object.keys(Request.prototype)) {
      if (key === "url") {
        continue;
      }
      oldInit[key] = oldRequest[key];
    }
    if (
      oldRequest.method.toUpperCase() !== "HEAD" &&
      oldRequest.method.toUpperCase() !== "GET"
    ) {
      const blob = await oldRequest.blob();
      if (blob.size > 0) {
        oldInit.body = blob;
      }
    }
    return new Request(newURL || oldRequest.url, { ...oldInit, ...newInit });
  };
  var ActionSingle = (url2) => () => fetch(url2);
  var Route = class {
    constructor(action, match = false) {
      this.__action = action;
      if (match === false) {
        this.__match = {
          url: false,
          method: false,
          headers: false,
          body: false,
        };
      } else if (
        typeof match === "string" ||
        match instanceof RegExp ||
        Array.isArray(match)
      ) {
        this.__match = {
          url: match,
          method: false,
          headers: false,
          body: false,
        };
      } else {
        this.__match = {
          url: match.url || false,
          method: match.method || false,
          headers: match.headers || false,
          body: match.body || false,
        };
      }
    }
    __test(request) {
      let match = this.__match;
      if (match.url) {
        if (Array.isArray(match.url)) {
          let atLeastOne = false;
          for (const m of match.url) {
            if (m instanceof RegExp) {
              if (m.test(request.url)) {
                atLeastOne = true;
                break;
              }
            } else {
              if (m === request.url) {
                atLeastOne = true;
                break;
              }
            }
          }
          if (!atLeastOne) {
            return false;
          }
        } else if (match.url instanceof RegExp) {
          if (!match.url.test(request.url)) {
            return false;
          }
        } else {
          if (match.url !== request.url) {
            return false;
          }
        }
      }
      if (match.method) {
        if (match.method instanceof RegExp) {
          if (!match.method.test(request.method)) {
            return false;
          }
        } else {
          if (match.method !== request.method) {
            return false;
          }
        }
      }
      if (match.headers) {
        for (const [header, match2] of Object.entries(match2.headers)) {
          const value = request.headers.get(header);
          if (match2 instanceof RegExp) {
            if (!match2.test(value)) {
              return false;
            }
          } else {
            if (match2 !== value) {
              return false;
            }
          }
        }
      }
      if (match.body) {
        if (match.body instanceof RegExp) {
          if (!match.body.test(request.body)) {
            return false;
          }
        } else {
          if (match.body !== request.body) {
            return false;
          }
        }
      }
      return true;
    }
    __exec(request) {
      const output = {};
      let match = this.__match;
      if (match.url) {
        if (Array.isArray(match.url)) {
          output.url = [];
          for (const m of match.url) {
            if (m instanceof RegExp) {
              output.url.push[m.exec(request.url)];
            } else {
              if (m === request.url) {
                output.url.push([m, m === request.url]);
              }
            }
          }
        } else if (match.url instanceof RegExp) {
          output.url = match.url.exec(request.url);
        } else {
          output.url = request.url;
        }
      }
      if (match.method) {
        if (match.method instanceof RegExp) {
          output.method = match.method.exec(request.method);
        } else {
          output.method = request.method;
        }
      }
      if (match.headers) {
        output.headers = {};
        for (const [header, match2] of Object.entries(match2.headers)) {
          const value = request.headers.get(header);
          if (match2 instanceof RegExp) {
            output.headers[header] = match2.exec(value);
          } else {
            output.headers[header] = value;
          }
        }
      }
      if (match.body) {
        if (match.body instanceof RegExp) {
          output.body = match.body.exec(request.body);
        } else {
          output.body = request.body;
        }
      }
      return output;
    }
    async send(currentRequest, currentResponse) {
      if (this.__test(currentRequest)) {
        return this.__action(
          currentRequest,
          currentResponse,
          this.__exec(currentRequest)
        );
      }
    }
  };
  var Router = class {
    constructor(...routes) {
      this.__routes = routes;
    }
    get lastRoute() {
      return __routes[__routes.length - 1];
    }
    async send(request) {
      let currentRequest = request.clone();
      let currentResponse;
      try {
        for (const route of this.__routes) {
          const res = await route.send(currentRequest, currentResponse);
          if (res instanceof Response) {
            return res;
          } else if (res === void 0) {
            continue;
          } else if (res === false) {
            return this.lastRoute.send(currentRequest);
          } else if (res === null) {
            return this.lastRoute.send(request);
          } else if (typeof res === "number") {
            return new Response("", { status: res });
          } else if (typeof res === "string") {
            return new Response(res);
          } else if (Array.isArray(res)) {
            [currentRequest, currentResponse] = res;
          }
        }
        throw new Error("matching route not found");
      } catch (error) {
        return new Response(error, { status: 500 });
      }
    }
    get routes() {
      return this.__routes;
    }
  };

  // forsnakenbuilder/service-worker.es6.mjs
  var pathname = globalThis.location.href;
  var local = pathname.substring(0, pathname.lastIndexOf("/"));
  var remote = `${globalThis.location.origin}/app/web/htmlbuilder@0.1.0`;
  var replacements = [
    new Route(ActionSingle(`${local}/defaults.html`), `${local}/defaults.html`),
    new Route(
      ActionSingle(`${local}/index.webmanifest`),
      `${local}/index.webmanifest`
    ),
    new Route(
      ActionSingle(`${local}/icons/icon-32.png`),
      `${local}/icons/icon-32.png`
    ),
    new Route(
      ActionSingle(`${local}/icons/icon-512.png`),
      `${local}/icons/icon-512.png`
    ),
    new Route(
      ActionSingle(
        `http://localhost:8080/app/web/forsnaken/internal-timer.component.mjs`
      ),
      `https://johnhenry.github.io/app/web/forsnaken/internal-timer.component.mjs`
    ),
    new Route(
      ActionSingle(
        `http://localhost:8080/app/web/forsnaken/event-consumer/index.component.mjs`
      ),
      `https://johnhenry.github.io/app/web/forsnaken/event-consumer/index.component.mjs`
    ),
    new Route(
      ActionSingle(
        `http://localhost:8080/app/web/forsnaken/canvasrenderer/index.component.mjs`
      ),
      `https://johnhenry.github.io/app/web/forsnaken/canvasrenderer/index.component.mjs`
    ),
    new Route(
      ActionSingle(
        `http://localhost:8080/app/web/forsnaken/SnakeGame/objects/index.component.mjs`
      ),
      `https://johnhenry.github.io/app/web/forsnaken/SnakeGame/objects/index.component.mjs`
    ),
    new Route(
      ActionSingle(
        `http://localhost:8080/app/web/forsnaken/pixelshaders/zoom-shader.component.mjs`
      ),
      `https://johnhenry.github.io/app/web/forsnaken/pixelshaders/zoom-shader.component.mjs`
    ),
    new Route(
      ActionSingle(
        `http://localhost:8080/app/web/forsnaken/pixelshaders/grid-shader.component.mjs`
      ),
      `https://johnhenry.github.io/app/web/forsnaken/pixelshaders/grid-shader.component.mjs`
    ),
  ];
  var GetApplication = new Route(
    async (request, _, match) =>
      fetch(
        await updateRequest(request, `${remote}/${match.url[1] || ""}`, {
          mode: "cors",
        })
      ),
    new RegExp(`^${local}/?(.+)?$`)
  );
  var DefaultRoute = new Route((request) => fetch(request));
  var router = new Router(...replacements, GetApplication, DefaultRoute);
  globalThis.addEventListener("fetch", (event) =>
    event.respondWith(router.send(event.request))
  );
})();

import {
  Route,
  Router,
  updateRequest,
  ActionSingle,
} from "../std/router@0.0.0/index.mjs";

const pathname = globalThis.location.href;
const local = pathname.substring(0, pathname.lastIndexOf("/")); // This folder's location
const remote = `${globalThis.location.origin}/app/web/forsnaken@0.0.0`; // Remote folder's location
const replacements = [
  // These routes replace calls to the remote application with calls to the local one.
];

// This route forwards requests to from local app to the target
const GetApplication = new Route(
  async (request, _, match) =>
    fetch(
      await updateRequest(request, `${remote}/${match.url[1] || ""}`, {
        mode: "cors",
      })
    ),
  new RegExp(`^${local}\/?(.+)?$`)
);

// This route simply forwards any requests.
const DefaultRoute = new Route((request) => fetch(request));

// The router is a collectoin of routes.
const router = new Router(...replacements, GetApplication, DefaultRoute);

globalThis.addEventListener("fetch", (event) =>
  event.respondWith(router.send(event.request))
);

// Additional Notes:
// Routes and routers can be nested using the send event.
// const superRouter = new Router(
//   new Route((request)=>router.send(request))
// );
// globalThis.addEventListener('fetch', (event) => event.respondWith(superRouter.send(event.request)));

// https://github.com/pillarjs/path-to-regexp can be used to create regular expressions from express string syntax

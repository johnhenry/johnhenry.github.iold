import FetchEventEmitter from "./FetchEventEmitter/index.mjs";
// import FetchEvent from "./FetchEventEmitter/FetchEvent.mjs";

// import { Response } from "./server/index.mjs"
const port = 8080;
const server = new FetchEventEmitter(Deno.listen({port}));

server.addEventListener('fetch', async (fetchEvent)=>{
  console.log('method:', await fetchEvent.request.methodReady);
  console.log('path:', await fetchEvent.request.pathReady);
  console.log('version:', await fetchEvent.request.versionReady);
  for await (const [key, value] of await fetchEvent.request.headerIteratorReady){
    console.log(`${key}:${value}`);
  }
  const headers = await fetchEvent.request.headersReady
  // console.log('headers:',headers );
  await fetchEvent.request.bodyStarted;
  switch(headers.get('content-type')){
    case 'application/x-www-form-urlencoded':
      console.log(await fetchEvent.request.formData());
      break;
    case 'application/json':
      console.log(await fetchEvent.request.json());
      break;
    default:
      console.log(await fetchEvent.request.text());
      break;
  }
  // fetchEvent.respondWith(new Response());
  server.close();
});
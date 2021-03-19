//////////
//////////
// import { Request, Response, ServerProxy } from "./client";

const ServerProxy = class{
  constructor(address, init){
    this.__address = address;
    this.__init = init;
  }
  send(request){
    // TODO get code from service workers
    const newRequest = update(this.__address, this.__init);
    return fetch(newRequest);
  }
}

const forward = (stream, outgoing)=>{

}

const fetch = async (request) => {
  const { host } = request.headers;
  const {hostname, port} = await dns(host);
  const stream = await Deno.connect({ hostname, port })
  forward(stream, request);
  await response.ok;
  const response = new Response(stream);
  return response();
};

const request = new Request();
const response = await fetch(request);

const proxy = new ServerProxy('http://localhost:8080');
const request = new Request();
const response = await proxy.send(request);
await response.VERSION;
await response.CODE;
await response.STATUS;

//////////
//////////
// import { Request, Response, Route, Router, ServerProxy} from "./server";

const FetchEvent = class extends Event {
  constructor(connection){
    super('fetch');
    this.__connection = connection;
    this.__request = new Request(connection);
  }
  get request (){
    return this.__request;
  }
  respondWith(response){
    forward(this.__connection, response);
  }
}
const FetchEventEmitter = class extends EventTarget{
  constructor({port, signal}){

  }
  sendStream(stream){
    this.dispatchEvent(new FetchEvent(stream));
  }
}

const handleWSResponse = (response)=>{
  const { socket } = response;
  // Read
  socket.onmessage = (message) => {};
  socket.addEventListener('message', (message) => {});
  for(const message of socket.iterator){

  }
  // Write
  socket.send(message);
  socket.close();
}
const handleSSEResponse = (response)=>{
  const {socket} = response;
  // Write
  socket.send(message);
  socket.close();
}

const autoResponse = async (request)=>{
  //TODO
};

const route = new Route((request, _, _)=>{
  const response = await autoResponse(request, {WSUpgrade:true, SSEUpgrade:true});// creates a response with appropriate response headers
  if(response instanceof WSResponse){
    return handleWSResponse(response);
  }else if(response instanceof SSEResponse){
    return handleSSEResponse(response);
  }else{
    await request.METHOD;
    await request.PATH;
    await request.VERSION;
    return [request, response];
    return [request, await proxy.send(response)];
    return [request, router.send(response)];
  }
});
const router = new Router(route);
const fetchEventEmitter = new FetchEventEmitter();

fetchEventEmitter.addEventListener('fetch', (event) => event.respondWith(router.send(event.request)));
fetchEventEmitter.addEventListener('fetch', async (event) => event.waitUntil(event.respondWith(await server.send(event.request))));

for await (const stream of Deno.listen({port:8080})){
  fetchEventEmitter.sendStream(stream);
}

request({hostname:'http://www.example.com'})`GET / HTTP/1.1
Content-Type:application/javascript
hostname:http://www.example.com

export default "I'm a page";
`;

response()`GET / HTTP/1.2
Content-Type:application/json

{
  "title": "I am JSON"
}
`;

request()`GET / HTTP/1.2
Content-Length:${BODY_LENGTH}

{
  "title": "I am JSON"
}
`;

// PAGE
export const version = "HTTP/1.1";
export const code = 200;
export const message = 'OK';
export const headers= async function * (request){
  yield ['Content-Type', 'application/json'];
}
export const body = async function * (request){
  yield `export message0 "I'm a page;"`;
  yield `export message1 "I'm also a page;"`;
}

// PAGE
const RETURN = '\r\n';
const preamble = (request) => "HTTP/1.1 200 OK";

const headers = async function * (request){
  yield ['Content-Type', 'application/json'];
  yield RETURN;
}
export const body = async function * (request){
  yield preamble(request);
  yield RETURN
  yield * headers(request);
  yield RETURN;
  yield * header(request);
  yield `export message1 "I'm also a page;"`;
}

// PAGE
export default async function * (request){
  yield `HTTP/1.1 200 OK`;
  yield RETURN;
  yield `Content-Type:application/json`;
  yield RETURN;
  yield RETURN;
  yield 'export default ...';
  yield RETURN;
}
// PAGE
const chunk = function * (message=""){
  yield message.length.toString(16);
  yield RETURN;
  yield message;
  yield RETURN;
}
export default async function * (request){
  yield `HTTP/1.1 200 OK`;
  yield RETURN;
  yield `Content-Encoding:chunked`;
  yield RETURN;
  yield RETURN;
  yield* chunk("hello");
  yield* chunk("hi");
  yield* chunk();
}
// PAGE
export default ()=>{
  return
`HTTP/1.1 200 OK
Content-Length: 10

I AM THING

`;
}
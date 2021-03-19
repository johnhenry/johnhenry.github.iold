import { Request } from "../server/index.mjs";
export default class extends Event{
  constructor(connection, eventInit){
    super("fetch", eventInit);
    this.__connection = connection;
    this.__request = new Request(connection);
  }
  get clientId(){
    throw new Error('clientId not implementd');
  }
  get preloadResponse(){
    throw new Error('preloadResponse not implementd');
  }
  get replacesClientId(){
    throw new Error('replacesClientId not implementd');
  }
  get resultingClientId(){
    throw new Error('replacesClientId not implementd');
  }
  get request(){
    return this.__request;
  }
  async respondWith(res){
    const response = await res;
    const connection = this.__connection;
    connection.write((await response.versionReady) + ' ');
    connection.write((await response.codeReady) + ' ');
    connection.write((await response.statusReady) + '\r\n');
    for(const header of await response.headersIterator){
      connection.write(header + '\r\n');
    }
    connection.write('\r\n');
    const { body } = res;

  }
  async waitUntil(){

  }
}

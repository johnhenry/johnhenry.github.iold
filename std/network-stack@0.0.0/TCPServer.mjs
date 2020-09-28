export default async function* ({ port }) {
  for await (const connection of Deno.listen({ port: 8000 })) {
    // new connection
    connections.push(connection);
    handle_connection(connection);
  }
}

console.log("tcp server listening on port 8000");

const connections: Deno.Conn[] = [];

async function handle_connection(connection: Deno.Conn) {
  let buffer = new Uint8Array(1024);
  while (true) {
    const count = await connection.read(buffer);
    if (!count) {
      // connection closed
      const index = connections.indexOf(connection);
      connections.splice(index, 1);
      break;
    } else {
      // message received
      let message = buffer.subarray(0, count);
      for (const current_connection of connections) {
        if (current_connection !== connection) {
          await current_connection.write(message);
        }
      }
    }
  }
}

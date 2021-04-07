/**
 * Normalize a port into a number, string, or false.
 */

export function normalizePort(val: any): number | null {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return null;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return null;
}

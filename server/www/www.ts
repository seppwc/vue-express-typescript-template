/**
 * Module dependencies.
 */
import app from "../app/app";
import http from "http";
import { normalizePort } from "../utils/normalizePort";
import { onError, onListening } from "../utils/listeners";
import { Config } from "../config/app.config";
/**
 * Get port from environment and store in Express.
 */

const keys = Config("app");

const port = normalizePort(keys.port) || 1234;
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", (err) => onError(port, err));
server.on("listening", () => onListening(server));

/**
 * Event listener for HTTP server "error" event.
 */

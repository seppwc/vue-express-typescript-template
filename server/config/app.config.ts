import DotENV from "dotenv";

/**
 * Load envirnoment variables
 *
 */

DotENV.config();

interface Config {
  [key: string]: any;
  app: {
    port?: string;
  };
}

export const Config = (target: string): any => {
  const c: Config = {
    app: {
      port: process.env.PORT,
    },
  };
  return c[target];
};

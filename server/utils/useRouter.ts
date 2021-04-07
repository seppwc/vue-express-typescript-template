import express, { Router } from "express";

export interface Route {
  path: string;
  router: express.Router;
}

export function useRouter(routes: Route[]): Router {
  const router = Router();
  routes.forEach((r) => {
    router.use(r.path, r.router);
  });

  return router;
}

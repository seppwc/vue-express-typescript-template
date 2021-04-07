import { Route, useRouter } from "../utils/useRouter";
import { goodbyeRouter } from "./goodbye/goodbye.route";
import { helloRouter } from "./hello/hello.route";

const routes: Route[] = [
  {
    path: "/",
    router: helloRouter,
  },
  {
    path: "/goodbye",
    router: goodbyeRouter,
  },
];

export const Router = useRouter(routes);

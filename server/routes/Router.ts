import { Route, useRouter } from "../utils/useRouter";
import { userRouter } from "./user/user.route";
import { taskRouter } from "./task/task.route";

const routes: Route[] = [
  {
    path: "/task",
    router: taskRouter,
  },
  {
    path: "/user",
    router: userRouter,
  },
];

export const Router = useRouter(routes);

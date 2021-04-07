export const db = {
  tasks: [
    {
      id: 1,
      userid: 1,
      title: "A Task title!",
      description: "a longer description of the title.",
      status: "in-progress",
      steps: ["make todo app", "???", "profit"],
      date_created: "2021-04-07T16:41:34.491Z",
      date_completed: undefined,
    },
    {
      id: 2,
      userid: 1,
      title: "Another Task title!",
      description: "another longer description of the title.",
      status: "not started",
      steps: ["A", "B", "C"],
      date_created: "2021-04-07T16:41:34.491Z",
      date_completed: undefined,
    },
    {
      id: 3,
      userid: 1,
      title: "A Finished Task",
      description: "This task has been completed",
      status: "complete",
      steps: [],
      date_created: "2021-04-07T16:41:34.491Z",
      date_completed: "2021-04-07T17:41:34.491Z",
    },
  ],
  users: [
    {
      id: 1,
      name: "Joe Clarke",
      email: "email@email.com",
    },
  ],
};

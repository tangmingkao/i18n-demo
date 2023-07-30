const routes = [
  {
    path: "/",
    name: "AppMain",
    component: () => import("@/components/layout/index.vue"),
    redirect: {
      name: "HomePage"
    },
    children: [
      {
        path: "",
        name: "HomePage",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "Home",
          toCache: false,
        },
      },
    ],
  }
];

export default routes;
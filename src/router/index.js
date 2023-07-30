import { createRouter, createWebHistory ,createWebHashHistory} from "vue-router";
import routes from "./modules/routes";


const router = createRouter({
  history: createWebHashHistory('/ise-network/'),
  scrollBehavior: (_to, _from, savedPosition) => {
    if(savedPosition){
      return savedPosition
    } else {
      return ({ left: 0, top: 0 })
    }
  },
  routes,
});

export default router;
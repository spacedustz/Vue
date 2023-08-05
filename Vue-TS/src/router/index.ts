import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ItemList from "@/views/ItemList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:status?",
    name: "item-list",
    component: ItemList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

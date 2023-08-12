import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ItemList from "@/views/ItemList.vue";

// 페이지를 여러개 생성 안하고 Dynamic Router를 통해 Status를 받아서 분류
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

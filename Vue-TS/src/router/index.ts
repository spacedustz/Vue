import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 페이지를 여러개 생성 안하고 Dynamic Router를 통해 Status를 받아서 분류
const routes: Array<RouteRecordRaw> = [
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

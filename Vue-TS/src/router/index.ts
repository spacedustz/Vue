import { createRouter, createWebHistory } from 'vue-router'
import RequestBackend from '../components/RequestBackend.vue'
import StreamingHls from '../components/StreamingHls.vue'
import TimeGraph from '../components/TimeGraph.vue'
import DummyChart from '../components/DummyChart.vue'

const routes = [
  {
    path: '/json',
    name: 'RequestBackend',
    component: RequestBackend
  },
  {
    path: '/video',
    name: 'StreamingHls',
    component: StreamingHls
  },
  {
    path: '/graph',
    name: 'TimeGraph',
    component: TimeGraph
  },
  {
    path: '/test',
    name: 'Dummy Chart',
    component: DummyChart
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

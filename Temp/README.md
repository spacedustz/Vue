# Vue-TS
Learn Vue with TypeScript

---

## BootStrap 설치 & 적용

[BootStrap Site](https://getbootstrap.com/)

```
npm i bootstrap bootstrap-vue-3
```

<br>

**main.ts**
main 파일에 BootStrap 적용

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(router).use(BootstrapVue3).mount("#app");
```

---

## Useless Component 제거

- Components, Views 디렉토리 하위 파일들 전부 제거
- Router 디렉토리 하위 index.ts에 Import된 불필요 컴포넌트 제거

```typescript
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

---

## Lint 단일 이름 인식

**vue.config.js 파일**

<br>

```
// 추가
lintOnSave:false
```
<br>

## Lint 설정

```
npm i -D eslint@7.32.0
```
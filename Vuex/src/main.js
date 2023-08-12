import { createApp } from 'vue';
import { createStore } from "vuex"; // Import Vuex Store

import App from './App.vue';

// 상태 객체를 반환하는 함수, App당 1개의 store만 가질 수 있음
const store = createStore({
    state() {
        // 이 반환 객체를 어플리케이션 전체와 관련된 데이터를 보유함
        return {
            counter: 0
        };
    }
});
const app = createApp(App);

// Store 사용
app.use(store);
app.mount('#app');

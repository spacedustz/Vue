import {createApp} from 'vue';
import {createStore} from "vuex"; // Import Vuex Store

import App from './App.vue';

// 상태 객체를 반환하는 함수, App당 1개의 store만 가질 수 있음
const store = createStore({
    state() {
        // 이 반환 객체를 어플리케이션 전체와 관련된 데이터를 보유함
        return {
            counter: 0
        };
    },

    // 상태를 변경하는 Mutation
    mutations: {
        // 현재 상태를 파라미터로 받음
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    getters: {
        // 상태, getters 2개의 파람터를 받을 수 있음
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;

            if (finalCounter < 0) return 0;
            if (finalCounter > 100) return 100;

            return finalCounter;
        }
    },
    actions: {
        // 파라미터로 context라는 객체를 받는다.
        increment(context) {
            setTimeout(function () {
                context.commit('increment');
            }, 2000);
        },
        // 이 Actions은 Dispatch 함수에 추가된 Payload를 받는다.
        increase(context, payload) {
          context.commit('increase', payload);
        }
    }
});
const app = createApp(App);

// Store 사용
app.use(store);
app.mount('#app');

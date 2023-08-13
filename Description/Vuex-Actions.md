## Actions을 이용한 비동기 코드 실행

Vuex에서 제공하는 핵심 기능중 하나가 코드의 비동기 실행 기능입니다.

<br>

이때, Mutation의 문제는 항상 동기 방식이며, 비동기 방식은 허용되지 않습니다.

따라서 Mutation이 실행 되면, 중단없이 단계별로 실행되면서 상태는 즉시 바뀌어야 합니다.

이유는 모든 Mutation이 최신 State를 받아야만 하기 때문에 이러한 방식이 강제됩니다.

<br>

이럴떄 Actions을 사용합니다.

동작 방식은 컴포넌트에서 Actions를 트리거하고 이 트리거된 Actions는 Mutation을 Commit 합니다.

Actions는 비동기 방식을 지원하기 때문에 컴포넌트와 Mutation 사이에 넣는 것은 일반적으로 좋은 사용 방식입니다.

컴포넌트에서 직접 Mutation을 Commit해도 되지만 Mutation에 실수로 비동기 코드를 넣는 것을 방지해주기 위함입니다.

<br>

그렇다면 2초를 기다린 후 실행하려면 어떻게 해야 할까요?

예를 들어 HTTP 요청을 보내고 응답을 기다리는 상황이 있을 수 있으니 Mutation을 2초 후 실행한다고 가정하겠습니다.

일단 Actions도 main app에 추가 해봅시다.

```js
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
```

<br>

위 코드에서,

Actions의 함수는 기본적으로 context 라는 객체를 파라미터로 받으며, 이 context를 호출할 수 있는 commit 함수가 있습니다.

이 commit 함수는 Mutation을 파라미터로 받으며, 추가 파라미터도 Payload, 값 등 받을 수 있습니다.

<br>

이제 컴포넌트에서 직접 Mutation을 Commit 하는게 아니라 Actions을 사용해 보도록 하죠.

Actions를 사용할 땐 dispatch() 함수를 사용하며 이 함수는 2개의 파라미터를 dispatch 할 수 있고, commit 함수와 많이 비슷합니다.

첫번째 파라미터는 Actions의 이름, 두번째 파라미터는 Payload or 하나의 파라미터 구분을 사용합니다.

<br>

아래 코드의 파라미터 구분에 있는 value가 increase Actions의 payload로 전달됩니다.

그리고 이 payload는 Mutation에 전달됩니다.

```js
function addOne() {  
  // Mutation의 이름을 commit에 넣어 Mutation을 불러옴 - X  // Actions로 변경  
  store.dispatch({  
    type: 'increase',  
    value: 10  
  });  
}
```
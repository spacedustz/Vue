## Vue Router

**Vue Router 패키지 설치**

```
npm i vue-router@next --save
```

<br>

그리고 main.ts 파일에 Router를 Import 해줍니다.

```javascript
import { createApp } from 'vue';  
import { createRouter } from 'vue-router';  // Import Router
  
import App from './App.vue';  
  
const app = createApp(App)  
  
const router = createRouter({  
    routes: []  
});  
  
app.mount('#app');
```

<br>

위 코드에서 router 변수에 createRouter() 라는 함수를 사용했습니다.

이 함수의 첫번째 파라미터로는 객체를 받고, 이 객체는 두가지 중요한 옵션을 설정할 수 있습니다.

**첫번째 옵션은 `routes` 입니다.**

<br>
이 `routes` 옵션에서 라우터에 등록하고자 하는 모든 URL을 등록합니다.

<br>

**두번째 옵션은 `history` 옵션입니다.**

`history` 옵션은 라우팅 히스토리 관리 방법을 지정할 수 있습니다.

ex 1) 사용자가 다른 곳을 클릭하면 다른 페이지로 넘어가고, 그 페이지가 브라우징 히스토리에 등록되도록 하는 방식입니다.

ex2) 사용자가 뒤로 가기 버튼을 누를 때는 히스토리를 통해 라우터가 이전 페이지를 알 수 있습니다.

<br>

먼저 vue-router의 createWebHistory 함수를 import 해 줍니다.

```javascript
import { createRouter, createWebHistory } from 'vue-router';
```

<br>

그리고 history 옵션에 createWebHistory 함수를 호출합니다.

```javascript
const router = createRouter({  
    routes: [],  
    history: createWebHistory(),  
});
```

<br>

**다시 `routes` 옵션으로 돌아와서**

`routes`는 어떤 URL에 대해 어떤 Vue 컴포넌트가 로드 되었는지를 알리는 역할을 합니다.

만약 Teams, Users 2개의 URL이 있다면 클릭했을떄 각자의 URL에 맞는 컴포넌트가 표시 되도록 하는겁니다.

<br>

`routes` 배열에는 자바스크립트 객체를 전달해야 합니다.

그리고 이 객체에는 `path`, `component` 옵션이 있으며 `path`부분은 도메인의 뒷 URL을 가르키며,

`component`는 해당 URL로 접속했을때 어떤 컴포넌트를 사용할건지에 대한 옵션입니다.

```javascript
const router = createRouter({  
    routes: [  
        { path: '/teams', component: TeamsList },  
        { path: '/users', component: UsersList }  
    ],  
    history: createWebHistory(),  
});

app.use(router);
```

<br>

이제 Vue App이 Vue Router에 대해 인식을 하게 됩니다.

하지만인식만 했을뿐 어디로 로드해야 하는지는 아직 정해주지 않았습니다.

이럴때 Vue 라우터에게 렌더링 위치를 알려주는 특수한 컴포넌트가 하나 있죠. `<router-view>`입니다.

```html
<router-view></router-view>
```

<br> 

이 특수 컴포넌트는 Vue Router를 쓸떄만 사용 가능합니다.

바로 이 위치로 컴포넌트가 로드 되어야 한다고 Vue App에게 알리는 PlaceHolder의 역할을 합니다.

![img](https://raw.githubusercontent.com/spacedustz/Obsidian-Image-Server/main/img2/router.png)


이제 위에서 router 상수를 통해 main.js 파일에서 선택합니다.

이렇게 라우팅을 통해 컴포넌트를 로드하면 Global/Local 컴포넌트를 추가 등록할 필요가 없습니다.

<br>

#### router-view

    - 페이지 표시 태그
    - url에 따른 컴포넌트가 화면에 그려지는 영역

---
## Router Link

Route 등록은 이제 끝났으니 Navigation에서 URL마다 설정해주던 커스텀 이벤트를 삭제하고,

`router-link`를 사용하여 특정 URL에 접속할 시 등록된 라우터 설정에서 지정한 컴포넌트로 이동하게 변경해줍니다.

```html
<router-link to="/teams"></router-link>
```

<br>

그리고 이 `<router-view>`는 브라우저의 기본값을 막고, 내부적으로 `<a>` 태그를 렌더링하기 때문에 CSS도 수정해줍니다.

<br>

#### router-view의 특징

컴파일 시, `<a>` 태그로 변환합니다.

<br>

**to 속성**

- to 속성 값의 경로로 이동
- v-bind와 함께 사용하면 동적으로 경로를 만들 수 있음
- to="test/path" 처럼 붙이면 현재 url에 이 path가 붙고,   to="/test/detail" 처럼 붙이면 default url에 붙음 (대표적)
- styling : `router-link-exact-active` 등 class를 통해 스타일을 줄 수 있음

---

## Dynamic Routing

- **url-path를 동적으로 요청받아 데이터를 넘길 수 있는 라우팅 방식** (파라미터 전달)  
  반대로 해당 파라미터 정보를 가져올 때는 $route 객체를 참조하면 됨
- **동적 세그먼트는 앞에 :가 붙음**  
  예) path='/user/:username/post/:post_id'  
  만약, path='/user/emma/post/77' 라면, 라우팅된 컴포넌트에서  
  this.route.params.username==′emma′this.route.params.post_id == 77
- **동일한 컴포넌트를 재사용**  
  즉, 컴포넌트의 lifecycle hook이 호출되지 않기 때문에 params 변경사항에 반응하기 위해서는 watch 옵션으로 $route객체의 수정을 감지해야함

<br>

이제 `URL/teams` 하위로 들어갔을때 팀의 id를 받아 각 팀의 정보와 구성원을 출력해 보겠습니다.

ex: `URL/teams/t1`

<br>

**main.js**

routes에 라우팅을 하나 더 추가합니다.

```javascript
    routes: [  
        // 해당 URL로 접속하면 옆의 컴포넌트를 로드하라는 의미  
        { path: '/teams', component: TeamsList },  
        { path: '/users', component: UsersList },  
        { path: '/teams/:teamId', component: TeamMembers }  
    ],  
    history: createWebHistory(),  
    linkActiveClass: 'router-link-active'  
});
```

<br>

**TeamMembers.vue**

이제 teams와 users는 main.js에서 제공해주고 있기 때문에 TeamMembers 컴포넌트에 주입해줍니다.

그리고 컴포넌트 생성 시 로직을 작성하기 위해 created() 함수를 작성합니다.

`$router`를 이용해 main.js의 정의된 router를 가져와서 Team의 id를 가져옵니다.

그리고 팀과 팀에 소속된 유저들을 찾아 데이터 프로퍼티에 넣어서 출력해줍니다.

```javascript
import UserItem from '../users/UserItem.vue';  
  
export default {  
  inject: ['teams', 'users'],  
  components: {  
    UserItem  
  },  
  created() {  
    const teamId = this.$router.param.value;  
    const selectedTeam = this.teams.find(  
        team => team.id === teamId  
    );  
    const members = selectedTeam.members;  
    const selectedMembers = [];  
  
    for(const member of members) {  
      const selectedUser = this.users.find(user => user.id === member);  
      selectedMembers.push(selectedUser);  
    }  
    this.members = selectedMembers;  
    this.teamName = selectedTeam.name;  
  },  
  data() {  
    return {  
      teamName: '',  
      members: []  
    };  
  },  
};
```

---

## Nasted Routing

- 라우터 컴포넌트 안에 하위 라우터 컴포넌트를 중첩하여 구성하는 방식입니다.
- 라우터로 화면을 이동할 때 하위 컴포넌트를 표시할 수 있습니다.
- 라우터 설정에서 **children** 옵션 사용 (Parent - Child 형태)

<br>

```javascript
const User = {
  template: `
    <div class="user">
	  <h2>User {{ $route.params.id }}</h2>
	  // id값에 맞는 User의 하위 컴포넌트가 들어옴 
      <router-view></router-view>
    </div>
  `,
}

const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // /user/:id/profile is matched
        path: 'profile',
        component: UserProfile,
      },
      {
        // /user/:id/posts is matched
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```

---

## 그 외 다른 기능들

<br>

#### Named Views

- 특정 url 주소에 여러 컴포넌트들을 영역별로 지정하여 렌더링하는 것입니다.
- 여러 개의 컴포넌트를 동시에 표시하게하는 방식(같은 레벨) 입니다.
- 라우터 설정에서 **components** 옵션 사용

<br>

```js
// App.vue
<div id="app">
  <router-view name="appHeader"></router-view>
  <router-view></router-view>
  <router-view name="appFooter"></router-view>
</div>

// router.js
{
  path: '/home',
  // Named Router
  components: {
    appHeader: AppHeader,
    default: Body,
    appFooter: AppFooter
  }
},
```

<br>

#### Nested Router vs Named Views

- Nested Router: 특정 URL에 지정된 1개의 컴포넌트가 여러 개의 하위 컴포넌트를 갖는 것입니다.
- Named View: 특정 URL에 여러 개의 컴포넌트를 영역 별로 지정하여 렌더링 하는 것입니다.

<br>

#### Named Routes

- router-link에 to 속성에 path 대신 name을 지정 가능합니다.

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

<br>

```javascript
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]
```

<br>

#### Mode 속성

Vue Router의 기본모드는 **Hash Mode** 입니다.

<br>

**Hash Mode**
- 브라우저에서 화면 위치를 변경할 때 url에 '#' + '위치'를 붙이면, 서버에 요청을 보내지 않고 이동 가능합니다.
- 즉, Vue에서 페이지 전환 시 url이 변경되어도 페이지가 리로드되지 않음(요청 없이 Vue Router를 통해 브라우저에서 처리)
- url에 '#'이 붙는 다는 단점이 있습니다.

<br>

**History Mode**
- '#' 안 들어가고 SPA구현하게 하기 위한 모드 (url이 정상적으로 보입니다.)
- html 5가 제공하는 'history API'를 이용합니다.

<br>

`<router-link>`를 쓰면 모드에 맞는 url을 적용해줍니다.

<br>

#### Router Transition

- Vue Router 에서 API로 기본적으로 제공하는 트랜지션
- 다른 페이지(라우트)로 전환될 때 페이지에 애니메이션이 들어감
- `<transition>` 태그에 name 속성** 값을 기반으로 클래스가 적용됨
    - 트랜지션 클래스(.[name]-enter, .[name]-enter-active, [name]-leave-to 등) 를 설정해주면 됨

```html
<template>
  <transition name="fade">
    <router-view class="main"></router-view>
  </transition>
</template>
<style scoped>
/* CSS : Router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

<br>

#### Navigation in Programming

- `<router-link :to="...">` 와 `router.push(...)`는 같음

<br>

#### Redirect 옵션

- 예시

```javascript
// '/a'에서 '/b'로 리디렉션
routes: [{path : '/a', redirect: '/b'}]
// 이름이 있는 라우터의 경우
routes: [{path : '/a', redirect: {name: 'babo'}}]
// 함수를 사용하여 동적 리디렉션 가능 
routes: [{path : '/a', redirect: to => {return '/with-params:id'}}]
```

<br>

#### Alias (별칭)

- url을 다르게 표시 가능
- 예시 : '/b'를 방문시에도 url을 '/a'에 방문한 것처럼 표시

```javascript
routes: [
{ path: '/a', component: A, alias: '/b' }]
```

<br>

#### props 옵션 (라우트 컴포넌트에 속성 전달)

- **props: true**로 설정하면 $route.params가 컴포넌트 props로 사용 가능
- 컴포넌트에서 $route를 사용하게 되면, 컴포넌트가 URL에 의족적이게 되어 재사용성이 떨어짐  
  이 의존성을 제거하기 위해서 props 옵션을 사용

```js
// $route에 의존성이 걸려있는경우
template: '<div>User {{ $route.params.id }}</div>'

// 의존성 해제
// 1. Boolean mode (props: true / false)
const User = {
 props: ['id'],
 template: '<div>User {{ id }}</div>'
}
{ path: '/user/:id', component: User, props: true }

// 2. Object mode
{ path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }

// 3. Function mode
// props를 반환하는 함수도 만들 수 있습니다.
{ path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }

// named view + Boolean mode
{ path: '/user/:id', components: { default: User, sidebar: Sidebar }, props: { default: true, sidebar: false } }
```

- props를 함수로 만들 때 유의 사항 중 한가지는 route가 변경되었을 때 호출 되는 함수이기 때문에 이 함수에서 state를 저장하면 안 됨
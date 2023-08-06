## Native Fetch API를 이용한 HTTP Request 전송

Vue에서는 Javascript 내장 함수를 이용한 방법과, Axios를 이용해 HTTP Reqeust를 보낼 수 있습니다.

<br>

Javascript 내장 함수를 이용한 방법에는 fetch 함수가 있습니다.

데이터를 Fetch 하는 역할도 있지만 서버로 데이터를 전송도 하는 함수입니다.

fetch 함수와 Axios는 첫번째 파라미터로 URL을 받고 내부에서 HTTP 요청을 보냅니다.

<br>

URL로는 Firebase의 Real-Time Database를 사용하였습니다.

Firebase URL 뒤에 임의의 URL 명과 json 확장자를 붙여줍니다.

임의의 URL로 요청을 전송하면 Firebase에서 그에 맞는 API를 자동 생성해줍니다.

```javascript
fetch('https://vue-http-request-fgraa2.firebaseio.com/custom-url.json');
```

<br>

즉 페이지를 새로고침 하거나 어플리케이션을 종료하지도 않고 재시작 하지도 않고 내부에서 요청을 보냅니다.

<br>

Fetch 함수의 2번쨰 파라미터로는 요소를 구성할 수 있는 자바스크립트 객체를 넣어줍니다.

그리고 그 객체엔 HTTP Method와 Header, Body를 포함해 전해주는데 Body는 Json으로 전달하기 위해,

JSON.stirngify() 함수를 사용해서 JSON으로 직렬화를 해줍니다.

```javascript
fetch('https://vue-http-request-fgraa2.firebaseio.com/custom-url.json', {
	method: 'POST',
	header: { 'Content-Type': 'application/json' },
	body: JSON.stringify({
		name: this.userName,
		rating: this.chosenRating,
	}),
});
```

<br>

이제 Firebase로 HTTP Post Method를 이용해 데이터를 전송했습니다. 반환값은 Promise가 됩니다.

그럼 더이상 emit을 이용한 Custom Events를 발생시킬 이유가 없으니 Custom Events를 삭제해줍니다.

<br>

이제 데이터를 Local에서 관리할 필요가 없어졌으니  App.vue에 정의해놓은 데이터 프로퍼티도 삭제해주고,

컴포넌트에 바인딩했던 값들도 전부 삭제해줍니다.

---

## Native Fetch API 대신 Axios 사용하기

위의 Native Fetch를 이용한 HTTP Request를 Axios를 사용하여 간결하게 바꿔보겠습니다.

[Axios]([https://github.com/axios/axios](https://github.com/axios/axios)

<br>

**Axios 사용**

```javascript
import axios from 'axios'
...
axios.post('https://vue-http-request-fgraa2.firebaseio.com/custom-url.json', {
	name: this.enteredName,
	ragting: this.chosenRating
});
```

<br>

코드를 보다시피 Axios를 사용하면 Content-Type이나 Header, Body를 자동으로 Json으로 변환 해줍니다.

하지만 패키지를 먼저 추가해야 하므로 앱의 크기가 증가하게 됩니다.

`fetch()`는 프로미스를 반환하므로 `then()`, `catch()` 및 `async`/ `await` 을 사용할 수 있습니다.  

Axios의 경우 `Promise`도 반환한다는 점에서 동일합니다.

---

## Firebase Real-Time Database : GET Data

예를 들어 저장한 데이터를 배열로 출력하는 버튼이 있다고 가정합니다.

만약 DB에서 정보를 받아오려고 한다면, 데이터를 받을 프로퍼티와 그 데이터를 저장할 로직인 methods,

그리고  버튼에 클릭 이벤트를 설정하여 받아올 수 있습니다.

<br>

fetch 함수의 Default HTTP Method는 GET이므로 method 부분을 생략할 수 있습니다.

그리고, 데이터를 단순히 불러오기만 하기 때문에 Header나 Body도 필요가 없습니다.

```javascript
fetch('https://vue-http-request-fgraa2.firebaseio.com/custom-url.json')
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
	}
	.then((data) => {
		const tmpResults = [];
		for (const id in data) {
			tmpResults.push({ id: id, name: data[id].name, rating: data[id].rating });
		}
		this.results = tmpResults;
	});
);
```

<br>

그럼 받아오는 데이터를 어떻게 받을까요?

전에도 말했듯이 fetch 함수의 반환값은 Promise입니다.

자바스크립트는 이전 코드의 결과값이 도착할 때까지 코드 실행을 멈추고 기다리는 언어가 아닙니다.

<br>

fetch는 데이터가 도착하면 수신할 수 있는 객체를 반환하고, 데이터가 도착했을 때 코드를 설정 및 실행합니다.

이때 리스너는 fetch의 결과값 뒤에 then 함수를 추가하여 설정하는데 then() 안에는 함수가 들어갑니다.

이 함수는 결과값이 나왔을때 실행되며, 파라미터도 자동으로 찾고 해당 요청의 응답이 됩니다.

즉, 서버에서 받은 응답을 브라우저로 전송하는 역할입니다.

<br>

그럼 이제 코드의 if문을 한번 보도록 하죠

자동으로 찾은 response를 이용해 HTTP 응답 코드가 200일때 response의 값을 json으로 파싱합니다.

이 json() 함수의 반환값도 마찬가지로 Promise가 반환되는데, then 블록에서 response.json 호출을 반환할 수 있습니다.

<br>

그리고 2번째 then에서는 return Promise가 완료되었을 때 트리거됩니다.

그럼 이제 2번째 then에서는 response.json을 통해 반환된 실제 data를 입력합니다. 이 데이터에서 실제 데이터에 Access 가능합니다.

이제 Vue의 데이터 프로퍼티인 results 배열에 추가해보도록 하죠.

<br>

```javascript
export default {  
  components: {  
    SurveyResult,  
  },  
  
  data() {  
    return {  
      results: [],  
    };  
  },  
  
  methods: {  
    loadExperiences() {  
      fetch('https://vue-http-request-fgraa2.firebaseio.com/custom-url.json')  
          .then((response) => {  
            if (response.ok) {  
              return response.json();  
            }  
          })  
          .then((data) => {  
            const tmpResults = [];  
            for (const id in data) {  
              tmpResults.push({id: id, name: data[id].name, rating: data[id].rating});  
            }  
            this.results = tmpResults;  
          });  
    },
  }  
};
```

<br>

2번쨰에서 받은 data는 배열이 아니라 자바스크립트 객체이기 때문에 먼저 배열로 변환을 해줍니다.

그리고 데이터를 돌면서 임시 배열인 tmpResults에 id와 해당 id를 키로 가진 값을 name과 rating에 넣어줍니다.

그 후 For Loop가 끝나면 데이터 프로퍼티인 result에 저장해주었습니다.

이제 Firebase에서 받아온 데이터를 Vue의 데이터 프로퍼티인 results 배열에 추가가 완료 되었습니다.

---

## 컴포넌트가 마운트 될 때 Data Fetching 하기

하지만 문제점이 있습니다.

버튼을 클릭했을때 데이터를 Fetching 해오고 있는데, 버튼 클릭으로만 트리거 하는게 아닌,

전체 컴포넌트가 최초로 Load될 때 트리거되게 해 볼 겁니다.

방법은 아주 간단한데 저번에 배웠던 Vue의 Lifecycle에 나왔던 `mounted` 함수를 이용하면 됩니다.

<br>

```javascript
export default {  
  components: {  
    SurveyResult,  
  },  
  
  data() {  
    return {  
      results: [],  
    };  
  },  
  
  methods: {  
    loadExperiences() {  
      fetch('https://vue-http-request-fgraa2.firebaseio.com/custom-url.json')  
          .then((response) => {  
            if (response.ok) {  
              return response.json();  
            }  
          })  
          .then((data) => {  
            const tmpResults = [];  
            for (const id in data) {  
              tmpResults.push({id: id, name: data[id].name, rating: data[id].rating});  
            }  
            this.results = tmpResults;  
          });  
    },

		// 이 부분
    mounted() {
	    this.loadExperiences();
    }
  }  
};
```

이렇게 mounted() 함수에 트리거 될 함수를 지정해주면 해당 컴포넌트가 마운트 될 때 모든 데이터를 Fetching 하게 됩니다.
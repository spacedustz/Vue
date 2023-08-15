## Parcel

타입스크립트를 로컬 환경에서 빠르게 테스트하고 싶다면 Parcel 번들러가 좋은 선택입니다.
다음과 같이 간단하게 프로젝트를 구성합니다.
``` bash
$ mkdir typescript-test
$ cd typescript-test
$ npm init -y
$ npm install -D typescript parcel-bundler
```

<br>

**프로젝트 구조**

tsconfig.json 파일을 생성하고 원하는 옵션을 추가합니다.
다음은 예시입니다.

```json
{
  "compilerOptions": {
    "strict": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

<br>

main.ts 파일을 생성하고 원하는 타입스크립트 코드를 입력합니다.

```ts
function add(a: number, b: number) {
return a + b;
}
const sum: number = add(1, 2);
console.log(sum);
```

<br>

index.html 파일을 생성하고 다음과 같이 .js가 아닌 .ts 파일을 연결합니다.
Parcel 번들러가 빌드시 자동으로 타입스크립트를 컴파일합니다.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>TypeScript Test</title>
</head>
<body>
  <script src="main.ts"></script>
</body>
</html>
```

<br>

마지막으로 다음과 같이 진입 파일로 index.html를 지정하고 Parcel 번들러로 빌드합니다.

```bash
$ npx parcel index.html
# Server running at http://localhost:1234
```

---

## TS Node

NodeJS 환경에서 테스트하고 싶다면 TS Node를 사용하세요.
다음과 같이 간단하게 프로젝트를 구성합니다.

```bash
$ mkdir typescript-test
$ cd typescript-test
$ npm init -y
$ npm install -D typescript @types/node ts-node
```

@types/node는 Node.js API를 위한 타입 선언 모듈입니다.

<br>

**프로젝트 구조**

tsconfig.json 파일을 생성하고 원하는 옵션을 추가합니다.
다음은 예시입니다.

```json
{
  "compilerOptions": {
    "strict": true,
     "module": "CommonJS"
  },
  "exclude": [
    "node_modules"
  ]
}
```

<br>

main.ts 파일을 생성하고 원하는 타입스크립트 코드를 입력합니다.

```ts
console.log('TypeScript on NodeJS!');
```

<br>

TS Node를 사용해 main.ts를 실행합니다.

```bash
$ npx ts-node main.ts
# TypeScript on NodeJS!
```
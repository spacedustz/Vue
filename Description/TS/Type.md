## 타입 선언

**불린: Boolean** 

단순한 참(true)/거짓(false) 값을 나타냅니다.

```ts
let isBoolean: boolean;
let isDone: boolean = false;
```

<br>

**숫자: Number**

모든 부동 소수점 값을 사용할 수 있습니다.
ES6에 도입된 2진수 및 8진수 리터럴도 지원합니다.

```ts
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;
```

<br>

**문자열: String**

문자열을 나타냅니다.
작은따옴표('), 큰따옴표(") 뿐만 아니라 ES6의 템플릿 문자열도 지원합니다.

```ts
let str: string;
let red: string = 'Red';
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = 'Your color is' + green;
```

<br>

**배열: Array**

순차적으로 값을 가지는 일반 배열을 나타냅니다.
배열은 다음과 같이 두 가지 방법으로 타입을 선언할 수 있습니다.

```ts
// 문자열만 가지는 배열
let fruits: string[] = ['Apple', 'Banana', 'Mango'];
// Or
let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];

// 숫자만 가지는 배열
let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
// Or
let oneToSeven: Array<number> = [1, 2, 3, 4, 5, 6, 7];
```

<br>

유니언 타입(다중 타입)의 ‘문자열과 숫자를 동시에 가지는 배열’도 선언할 수 있습니다.

```ts
let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
// Or
let array: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3];
```

<br>

배열이 가지는 항목의 값을 단언할 수 없다면 any를 사용할 수 있습니다.

```ts
let someArr: any[] = [0, 1, {}, [], 'str', false];
```

<br>

인터페이스(Interface)나 커스텀 타입(Type)을 사용할 수도 있습니다.

```ts
interface IUser {
name: string,
age: number,
isValid: boolean
}
let userArr: IUser[] = [
{
name: 'Neo',
age: 85,
isValid: true
},
{
name: 'Lewis',
age: 52,
isValid: false
},
{
name: 'Evan',
age: 36,
isValid: true
}
];
```

<br>

유용하진 않지만, 다음과 같이 특정한 값으로 타입을 대신해 작성할 수도 있습니다.

```ts
let array = 10[];
array = [10];
array.push(10);
array.push(11); // Error - TS2345
```

<br>

읽기 전용 배열을 생성할 수도 있습니다.
readonly 키워드나 ReadonlyArray 타입을 사용하면 됩니다.

```ts
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];

arrA[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrA.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

arrB[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrB.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.
```
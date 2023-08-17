## 불린: Boolean 

단순한 참(true)/거짓(false) 값을 나타냅니다.

```ts
let isBoolean: boolean;
let isDone: boolean = false;
```

<br>

## 숫자: Number

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

## 문자열: String

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

## 배열: Array

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

## Union Type
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

## Interface & Custom Type
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

## 읽기 전용 배열: Read Only Array
readonly 키워드나 ReadonlyArray 타입을 사용하면 됩니다.

```ts
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];

arrA[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrA.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

arrB[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrB.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.
```

<br>

## 튜플: Tuple

Tuple 타입은 배열과 유사합니다.
차이점이라면 정해진 타입과 고정된 길이(length) 배열을 표현합니다.

```ts
let tuple: [string, number];
tuple = ['a', 1];
tuple = ['a', 1, 2]; // error - TS2322
tuple = [1, 'a']; // error - TS2322
```

<br>

다음과 같이 데이터를 개별 변수로 지정하지 않고, 단일 Tuple 타입으로 지정해 사용할 수 있습니다.

```ts
// Variables
let userId: number = 1234;
let userName: string = 'ABC';
let isValid: boolean = true;

// Tuple
let user: [number, string, boolean] = [1234, 'ABC', true];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
```

<br>

위 방식을 활용해 다음과 같은 Tuple 타입의 배열(2차원)을 사용할 수 있습니다.

```ts
let users1: [number, string, boolean][];
let user2: Array<[number, string, boolean]>;

users1 = [[1, "ABC", true], [2, "DEF", true], [3, "GHI", true]];
```

<br>

값으로 타입을 대신할 수도 있습니다.

```ts
let tuple: [1, number];
tuple = [1,2];
tuple = [1,3];
tuple = [2,3]; // error - TS2322: Type '2' is not assignable to type '1'
```

<br>

Tuple은 **정해진 타입의 고정된 길이 배열**을 표현하지만, 이는 할당(Assign)에 국한됩니다.
`.push()`나  `.splica()` 등을 통해 값을 넣는 행위는 막을 수 없습니다.

```ts
let tuple: [string, number];
tuple = ['a', 1];
tuple = ['b', 2];
tuple.push(3);
console.log(tuple); // ['b', 2, 3]
tuple.push(true); // error - TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'
```

<br>

`readonly` 튜플을 생성할 수도 있습니다.

```ts
let a: readonly [string, number] = ['Hello', 123];
a[0] = 'World'; // error - TS2540: Cannot assign to '0' because it is a read-only property
```

<br>

## 열거형: Enum

Enum은 숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입으로, 값의 종류가 일정한 범위로 정해져 있는 경우 유용합니다.

기본적으로 `0`부터 시작하며 값은 `1`씩 증가합니다.

값을 수동으로 바꿀수도 있으며, 값을 변경한 부분부터 다시 1씩 증가합니다.

```ts
enum Week {
    Sun,
    Mon = 22,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Week.Sun); // 0
console.log(Week.Tue); // 23
```

<br>

## 모든 타입: Any

Any는 모든 타입을 의미합니다.

따라서 일반적인 자바스크립트 변수와 동일하게 어떤 타입의 값도 할당할 수 있습니다.

외부 자원을 활용해 개발할 때 불가피하게 타입을 단언할 수 없는 경우, 유용할 수 있습니다.

```ts
let any: any = 123;
any = 'ABC';
any = {};
any = null;

const list: any[] = [1, true, 'AnyThing'];
```

<br>

## 알 수 없는 타입: Unknown

Any와 같이 최상의 타입이며, 어떤 타입의 값도 할당할 수 있지만 Any를 제외한 다른 타입에는 할당할 수 없습니다.

**Unknown은 타입 단언(Assertions)이나 타입 가드(Guards)를 필요호 하지만 아직 배우지 않았으니 잠시 넘어갑니다.**

```ts
let a: any = 123;
let u: unknown = 123;

let v1: boolean = a;// any는 어디든 할당가능
let v2: number = u; // Unknown은 any를 제외한 다른 타입에 값 할당이 불가능
let v: any = u; // 가능
let v4: number = u as number // 타입을 단언하면 할당 불가능
```

<br>

다양한 타입을 반환할 수 있는 API에서 유용할 수 있습니다.

```ts
type Result = {
    success: true,
    value: unknown
} | {
    success: false,
    error: Error
}

export default function getItems(user: User): Result {
    // Some Logic..
    if (id.isValid) {
        return {
            success: true,
            value: ['Apple', 'Banana']
        };
    } else {
        return {
            success: false,
            error: new Error('Invalid User')
        };
    }
}
```

<br>

## 객체: Object

기본적으로 `typeof` 연산자가 `object`로 반환하는 모든 타입을 나타냅니다.

**컴파일러 옵션에서 strict를 true로 설정하면 null은 포함되지 않습니다.**

```ts
let obj: object = {};
let arr: object = [];
let func: object = function(){};
let nullable: object = null;
let date: object = new Date();
// ...
```

<br>

여러 타입의 상위 타입이기 때문에 이렇게 사용하는것은 바람직하지 않습니다.

보다 정확하게 타입 지정을 하기 위해 다음과 같이 객체 속성(Properties)들에 대한 타입을 개별적으로 지정합니다.

```ts
let userA: { name: string, age: number } = {
    name: 'A',
    age: 1
};

let userB: { name: string, age: number } = {
    name: 'B',
    age: false, // error
    email: 'a@a.com' // error
}
```

<br>

반복적인 사용을 원하는 경우, `interface`나 `type`을 사용하는 것을 추천합니다.

```ts
interface User {
    name: string,
    age: number
}

let userA: User = {
    name: 'A',
    age: 1
};

let userB: User = {
    name: 'B',
    age: 2
};
```

<br>

## Null & Undefined

기본적으로 Null과 Undefined는 모든 타입의 하위 타입으로, 다음과 같이 할당 가능하며, 서로 간의 할당도 가능하다.

```ts
let num: number = undefined;
let str: string = null;
let obj: { a: 1, b: false } = undefined;
let arr: any[] = null;
let und: undefined = null;
let nul: null = undefined;
let voi: void = null;
//...
```

<br>

## Void

Void는 일반적으로 값을 반환하지 않는 함수에서 사용되며, 값을 반환하지 않는 함수는 `undefined`를 반환합니다.

```ts
function hello(msg: string): void {
    console.log(`Hello ${msg}`);
}

const hi: void = hello('World');
console.log(hi); // undefined
```

<br>

## Never

Never은 절대 발생하지 않을 값을 나타내며, 어떤 타입도 적용할 수 없습니다.

```ts
function error(message: string): never {
    throw new Error(message);
}
```

<br>

보통 다음과 같이 빈 배열을 타입으로 잘못 선언한 경우, Never를 볼 수 있습니다.

```ts
const never: [] = [];
never.push(3); // Error - TS2345: Argument of type '3' is not assignable to parameterr of type 'never'
```

<br>

## Union

2개 이상의 타입을 허용하는 경우, 이를 유니언 이라고 합니다.

`|` (Vertical Bar)를 통해 타입을 구분하며, `()`는 선택 사항입니다.

```ts
let union: (string|number);
union = '문자열';
union = 123;
```

<br>

## InterSection

`&`를 사용해 2개 이상의 타입을 조합하는 경우, 이를 인터섹션(InterSection)이라고 합니다.

인터섹션은 새로운 타입을 생성하지 않고 기존의 타입들을 조합할 수 있기 때문에 유용하지만 자주 사용되는 방법은 아닙니다.

```ts
interface User { name: string, age: number }
interface Validation { isValid: boolean }

const skw: User & Validation = {
    name: 'skw',
    age: 1,
    isValid: true // Validation Type
}
```

<br>

## 함수: Function

화살표 함수를 이용해 타입을 지정할 수 있습니다.

인수의 타입과 반환 값의 타입을 입력합니다.

```ts
// 2개의 숫자 타입을 가지고 숫자 타입을 반환하는 함수
let func: (x: number, y: number) => number = (x, y) => x + y;

// 파라미터가 없고 반환값도 없는 함수
let voidFunc: () => void = () => console.log('Hello World~');
```

<br>

## 타입 추론 (Interface)

명시적으로 타입 선언이 되어있지 않은 경우, 타입스크립트는 타입을 추론해 제공합니다, 개념은 매우 단순합니다.

타입스크립트가 타입을 추론하는 경우는 다음과 같습니다.
- 초기화된 변수
- 기본값이 설정된 매개 변수
- 반환 값이 있는 함수

```ts
// 초기화된 변수
let num = 12;
num = 'Hello Type'; // error-TS2322 : Type 'Hello Type' is not assignable to type 'number'

// 기본값이 설정된 매개 변수 'b'
function add(a: number, b: number = 2): number {
    // 반환값이 있는 함수
    return a + b;
}
```

<br>

## 타입 단언 (Assertions)

타입스크립트가 타입 추론을 통해 판단할 수 있는 타입의 범주를 넘는 경우, 더 이상 추론하지 않도록 지시할 수 있습니다.

이를 '타입 단언'이라고 하며, 이는 프로그래머가 타입스크립트보다 타입에 대해 더 잘 이해하고 있는 상황을 의미합니다.

다음 예시를 보겠습니다.

```ts
function someFunc(val: string|number, isNumber: boolean) {
    if (isNumber) {
        val.toFixed(2); // error-TS2339 : Property 'toFixed' does not exist on type 'string'
    }
}
```

함수의 파라미터인 `val`은 유니언 타입으로 문자열이거나 숫자일 수 있습니다.

그리고 파라미터 `isNumber`는 boolean이며 이름을 통해 숫자 여부를 확인하는 값이라는 걸 추론할 수 있습니다.

따라서 `isNumber`가 `true`일 경우 `val`은 숫자이고, 그럼 `toFixed`를 사용할 수 있음을 확실히 알 수 있습니다.

하지만 타입스크립트는 `isNumber`라는 이름만으로 위 내용을 추론할 수 없기 때문에,

`val`이 문자열인 경우 `toFixed`를 사용할 수 없다고(컴파일 단계에서) 에러를 반환합니다.

<br>

```ts
function someFunc(val: string|number, isNumber: boolean) {
    if (isNumber) {
        (val as number).toFixed(2);
    }
    /**
     * Or
     * <타입> 변수
     * (<number>val).toFixed(2)
     */
}
```

따라서 `isNumber`가 `true`일 때 `val`이 숫자음을 다음과 같이 2가지 방식으로 단언할 수 있습니다.

두번째 방식 `(<number>val)`은 JSX를 사용하는 경우 특정 구문 파싱에서 문제가 발생할 수 있으며, 결과적으로 파일에서 사용 불가능합니다.

<br>

## Non-Null 단언 연산자

!를 사용하는 Non-null 단언 연산자(Non-null assertion operator)를 통해 피연산자가 Nullish(null이나 undefined) 값이 아님을 단언할 수 있는데, 변수나 속성에서 간단하게 사용할 수 있기 때문에 유용합니다.

다음 예제 중 fnA 함수를 살펴보면, 매개 변수 x는 함수 내에서 toFixed를 사용하는 숫자 타입으로 처리되지만 null이나 undefined일 수 있기 때문에 에러가 발생합니다.

이를 타입 단언이나 if 조건문으로 해결할 수도 있지만, 마지막 함수와 같이 !를 사용하는 Non-null 단언 연산자를 이용해 간단하게 정리할 수 있습니다.


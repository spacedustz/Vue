/* 타입 지정 */
function someFunc(a: number, b: number): number { return a+b; }

let sum: number = someFunc(1,2);
console.log("타입 지정 : " + sum);

/* 타입 선언 */

// Boolean
let isBoolean: boolean = false;

// Number, 모든 부동 소수점 값 사용 가능 / ES6에 도입된 2진수 및 8진수 디터럴도 지원함
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;

// 문자열: String
let str: string;
let red: string = "Red";
let myColor: string = `My Color is ${red}.`;

// 배열: Array
let fruits1: string[] = ["Apple", "Banana", "Mango"];
let fruits2: Array<string> = ["Apple", "Banana", "Mango"];
let oneToSeven1: number[] = [1,2,3,4,5,6,7];
let oneToSeven2: Array<number> = [1,2,3,4,5,6,7];

// Union 타입(다중 타입)의 '문자열과 숫자를 동시에 가지는 배열'
let array1: (string|number)[] = ["Apple", 1, "Banana", 2];
let array2: Array<(string|number)> = ["Apple", 1, "Banana", 2];

// 배열이 가지는 항목의 값을 단언할 수 없다면 any를 사용한다
let someArr: any[] = [0, 1, {}, [], "문자열", false, undefined, NaN];

// Interface & Custom Type
interface User {
    name: string,
    age: number,
    isValid: boolean
}

let userArr: User[] = [
    {
        name: "A",
        age: 1,
        isValid: true
    },
    {
        name: "B",
        age: 2,
        isValid: true
    },
    {
        name: "C",
        age: 3,
        isValid: true
    },
];

// 특정한 값으로 타입을 대신 작성
let arr = [];
arr = [10];
arr.push(10);
arr.push(11); // Error - TS2345

// ReadOnly Array
let arrA: readonly number[] = [1,2,3,4];
let arrB: ReadonlyArray<number> = [4,3,2,1];

// arrA[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
// arrA.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

// arrB[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
// arrB.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.
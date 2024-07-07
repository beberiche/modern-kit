# isSubset

두번째 인자로 주어지는 배열의 모든 요소를 첫번째 인자의 배열이 완전히 포함하는지(부분집합) 에 대한 여부 `boolean` 를 반환합니다.

배열 요소의 타입이 참조형인 경우, 깊은 비교를 진행하며, `iteratee` 함수 인자를 정의하여 비교항목을 설정하는 것이 가능합니다.

<br />



## Code
[🔗 실제 구현 코드 확인](https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/validator/isSubset/index.ts)

## Interface
```ts title="typescript"
const isSubset = <T, U>(
  parentArray: readonly T[],
  childArray: readonly T[],
  iteratee?: (item: T) => U
) => boolean;
```

## Usage
```ts title="typescript"
import { isSubset } from '@modern-kit/utils';

const parentArray = [1, 2, 3, 4];
const childArray1 = [1, 3];
const childArray2 = [1, 5];

console.log(isSubset(parentArray, childArray1)); // true
console.log(isSubset(parentArray, childArray2)); // false
```

```ts title="typescript"
import { isSubset } from '@modern-kit/utils';

const parentArray = ['1', 2, 3, 4];
const childArray1 = ['1', 2, 3];
const childArray2 = [1, '2', 3];

console.log(isSubset(parentArray, childArray1)); // true
console.log(isSubset(parentArray, childArray2)); // false
```

```ts title="typescript"
// 요소 타입이 배열인 경우
import { isSubset } from '@modern-kit/utils';

const parentArray = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]];
const childArray1 = [[0, 1, 2, 3, 4]];
const childArray2 = [[0, 1, 7, 4, 9]];

isSubset(parentArray, childArray1); // false, 요소가 참조형(배열)이므로, 주소값이 달라 false를 반환한다.
isSubset(parentArray, childArray2, (obj) => obj[2]); // true  ([2,7], [7])
isSubset(parentArray, childArray2, (obj) => obj[3]); // false ([3,8], [4])
```

```ts title="typescript
// 깊이가 2 이상의 오브젝트
import { isSubset } from '@modern-kit/utils';
const parentArray = [
  {
    name: 'Peter',
    age: 13,
  },
  {
    name: 'Aimee',
    age: 25,
  },
];

const childArray1 = [
  {
    name: 'Aimee',
    age: 25,
  },
];

const childArray2 = [
  {
    name: 'Peter',
    age: 15,
  },
];

isSubset(parentArray, childArray1); // false, 요소가 참조형(객체)이므로, 주소값이 달라 false를 반환한다
isSubset(parentArray, childArray1, (obj) => JSON.stringify(obj)); // true
isSubset(parentArray, childArray2, (obj) => JSON.stringify(obj)); // false
isSubset(parentArray, childArray2, (obj) => obj.name); // true

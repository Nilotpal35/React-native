//flattening of array

// const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// const n = 0;

// function flattenArray(arr, depth, output = []) {
//   for (const item of arr) {
//     if (Array.isArray(item) && depth > 0) {
//       flattenArray(item, depth - 1, output);
//     } else {
//       output.push(item);
//     }
//   }
//   return output;
// }

// console.log(flattenArray(array, n));

// -----------------------------------------------------------------------

//find the single apperance element in array

//const array = [1, 2, 2, 1, 3, 4, 4, 6, 5, 5, 6, 7, 8, 8, 7];

// function findSingleAppearenceElement(arr, result = {}) {
//   for (let i of arr) {
//     if (result[i]) {
//       result[i] = result[i] + 1;
//     } else {
//       result[i] = 1;
//     }
//   }
//   return result;
// }

// const res = findSingleAppearenceElement(array);
// for (const [k, v] of Object.entries(res)) {
//   if (v === 1) {
//     console.log(+k);
//   }
// }

// -----------------------------------------------------------------------
//currying function

// function curryingFunc(...a) {
//   return function (...b) {
//     return function (...c) {
//       const finalArray = [...a, ...b, ...c];
//       return finalArray.reduce((acc, curr) => {
//         return acc + curr;
//       }, 0);
//     };
//   };
// }

// const testFun = curryingFunc(2, 3, 4)()();
// console.log(testFun);

//-----------------------------------------------------------------------

//Promise pool

// function promisePool() {}

// const functions1 = new Promise((res) => {
//   setTimeout(res, 300);
// });
// const functions2 = new Promise((res) => {
//   setTimeout(res, 400);
// });

// const functions3 = new Promise((res) => {
//   setTimeout(res, 200);
// });

// Promise.all([functions1, functions2, functions3]).then((res) =>
//   console.log(res)
// );

//-----------------------------------------------------------------------

//nested array inorder traversal

// const arr = [1, [2, 3, [5, 6, 7]], [8, [9]]];

// function* flattenArray(ar) {
//   for (let item of ar) {
//     if (Array.isArray(item)) {
//       yield* flattenArray(item);
//     } else {
//       yield item;
//     }
//   }
//   console.log("done");
// }

// const gen = flattenArray(arr);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

//-----------------------------------------------------------------------

const store = new Map();
const o = {};
const array = [
  [{}, {}],
  [{}, {}],
  [{}, {}],
];
let flag = false;
let calls = 0;
const sample = array.map(([a, b]) => {
  if (typeof a !== "object" && typeof b !== "object") {
    if (store.has(`${a}${b}`) && store.get(`${a}${b}`) === a + b) {
      calls = calls;
    } else {
      store.set(`${a}${b}`, a + b);
      calls += 1;
    }
    return { val: store.get(`${a}${b}`), calls: calls };
  } else {
    if (store.has(a + b) && store.get(a + b) === { ...a, ...b }) {
      calls = calls;
    } else {
      store.set(a + b, { ...a, ...b });
      if (!flag) {
        calls += 1;
      }
      if (a == b) {
        flag = true;
      }
    }
    return { val: store.get(a + b), calls: calls };
  }
});
console.log(store);

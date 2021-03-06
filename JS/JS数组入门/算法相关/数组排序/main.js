// const array = [2, 1, 5, 3, 8, 4, 9, 5];
//选择排序
// const array1 = [];
// const sort1 = array => {
//   for (let i = 0; i < array.length; i) {
//     let min;
//     for (let j = 0; j < array.length; j++) {
//       if (j === 0) {
//         min = array[0];
//       } else if (min > array[j]) {
//         min = array[j];
//       }
//     }
//     array1.push(min);
//     array.splice(array.indexOf(min), 1);
//   }
// };
// sort1(array);
// console.log(array1); //12345589
// console.log(array); //[]

//快速排序
// const array = [2, 1, 5, 3, 8, 4, 9, 5];
// Array.prototype.quickSort = function() {
//   const length = this.length;
//   if (length < 2) return this;

//   const basic = this[0],
//     left = [],
//     right = [];
//   for (let i = 1; i < length; i++) {
//     const iv = this[i];
//     iv >= basic && right.push(iv);
//     iv < basic && left.push(iv);
//   }
//   return left.quickSort().concat(basic, right.quickSort());
// };
// const array2 = array.quickSort();
// console.log(array2); //12345589
// console.log(array); //老样子

//归并排序
// const array = [2, 1, 5, 3, 8, 4, 9, 5];
// function merge(left, right) {
//   var result = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   return result.concat(left, right);
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   var middle = Math.floor(arr.length / 2);
//   var left = arr.slice(0, middle);
//   var right = arr.slice(middle);
//   return merge(mergeSort(left), mergeSort(right));
// }
// const array3 = mergeSort(array);
// console.log(array3); //12345589
// console.log(array); //老样子

//计数排序
// const array = [2, 1, 5, 3, 8, 4, 9, 5];
// Array.prototype.countSort = function() {
//   const C = [];
//   for (let i = 0; i < this.length; i++) {
//     const j = this[i];
//     C[j] >= 1 ? C[j]++ : (C[j] = 1);
//   }
//   //   console.log(C);
//   //   console.log(C.length);
//   const D = [];
//   for (let j = 0; j < C.length; j++) {
//     if (C[j]) {
//       while (C[j] > 0) {
//         D.push(j);
//         C[j]--;
//       }
//     }
//   }
//   return D;
// };
// const array4 = array.countSort();
// console.log(array4); //12345589
// console.log(array); //老样子

// const array = [2, 1, 5, 3, 8, 4, 9, 5];
// Array.prototype.bubble_sort = function() {
//   var i, j, temp;
//   for (i = 0; i < this.length - 1; i++)
//     for (j = 0; j < this.length - 1 - i; j++)
//       if (this[j] > this[j + 1]) {
//         temp = this[j];
//         this[j] = this[j + 1];
//         this[j + 1] = temp;
//       }
//   return this;
// };
// const array5 = array.bubble_sort();
// console.log(array5); //12345589
// console.log(array); //12345589

const array = [2, 1, 5, 3, 8, 4, 9, 5];
Array.prototype.insertion_sort = function() {
  var i, j;
  for (i = 1; i < this.length; i++) {
    for (j = 0; j < i; j++) {
      if (this[j] > this[i]) {
        this.splice(j, 0, this[i]);
        this.splice(i + 1, 1);
        break;
      }
    }
  }
  return this;
};
const array6 = array.insertion_sort();
console.log(array6); //12345589
console.log(array); //12345589

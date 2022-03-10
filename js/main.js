// array 1

// let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (let i = 0; i <array1.length; i++) {
//   if (array1[i] % 2 != 0){
//     console.log(array1[i]);
//   }
// }

// array 2

// let array2 = [2];
// let arrayend = [];

// for (let i = 0; i <= 10; i++) {
//   arrayend.push(array2**i);
// }
// console.log(arrayend);


// array 3

// let array3 = 5;
// let arrayadd = 10;
// let arrayy = []
// for (let i = 0; i < 4; i++) {
//   arrayy.push(array3 + arrayadd)
//   arrayadd += 10
// }
// console.log(arrayy);


// array 4 

// let array3 = 4;
// let arrayadd = 2;
// let arrayy = []
// for (let i = 0; i < 4; i++) {
//   arrayy.push(array3 * arrayadd)
//   arrayadd *= 2
// }
// console.log(arrayy);


// array 7

// let array7 = [1,2,3,4,5,6,7,8,9];
// array7.reverse();
// console.log('reversed:', array7);

 

// Array8

// let newArray = [4, 5, 7, 8, 6, 9];
// let oddRiseArray = [];
// let count = 0;

// for(let i = 0; i < newArray.length; i++){
//   if(newArray[i] % 2 != 0){
//     oddRiseArray[oddRiseArray.length] = newArray[i];
//     count++;
//   }
// }
// console.log(oddRiseArray, count);


// Array9

// let newArray = [4, 5, 7, 8, 6, 9];
// let evenDecreaseArray = [];
// let count = 0;
// for(let i = newArray.length - 1; i >= 0; i--){
//   if(newArray[i] % 2 == 0){
//     evenDecreaseArray[evenDecreaseArray.length] = newArray[i];
//     count++;
//   }
// }
// console.log(evenDecreaseArray, count);


// Array10

// let newArray = [4, 5, 7, 8, 6, 9];
// let evenRiseArray = [];
// let oddDecreaseArray = [];
// let j = 0;

// for(let i = 0, j = newArray.length - 1; i < newArray.length; i++, j--)
//   if(newArray[i] % 2 == 0){
//     evenRiseArray[evenRiseArray.length] = newArray[i];
//   } 
//   if(newArray[j] % 2 != 0)
//     oddDecreaseArray[oddDecreaseArray.length] = newArray[j];
//   }
// }
// console.log(evenRiseArray, oddDecreaseArray);



// Array18

// let newArray = [18, 2, 11, 14, 10];
// for(let i = 0; i < newArray.length; i++){
//   if(newArray[i] < newArray[newArray.length - 1]){
//     console.log(newArray[i]);
//     break;
//   }
//   if(i == newArray.length -1){
//     console.log(0);
//   }
// }


// Array19


// let newArray = [2, 4, 3, 6, 8, 9, 7];
// for(let i = newArray.length - 1; i >= 0; i--){
//   if(newArray[i] < newArray[newArray.length - 1] && newArray[i] > newArray[0]){
//     console.log(i);
//     break;
//   } 
//   if(i == newArray[0]){
//     console.log(0);
//   }
// }

// Array20

// let newArray = [2, 3, 4, 7, 4, 2, 9, 12];
// let k = 2;
// let l = 6;
// let count = 0;

// for(let i = k; i < l; i++){
//   count += newArray[i];
// }

// console.log(count);


// Array21
// let newArray = [1, 2, 10, 4, 5, 6];
// let k = 2;
// let l = 5;
// let count = 0;
// let check = 0;

// for(let i = k; i < l; i++){
//   count += newArray[i]; 
//   check++;
// }

// console.log(count / check);





// Array22

// let newArray = [1, 2, 3, 4, 5, 1, 2];
// let k = 2;
// let l = 4;
// let count = 0;
// for(let i = 0; i < newArray.length; i++){
//   if(i < k || i > l){
//     count += newArray[i];
//   }
// }

// console.log(count);



// Array23


// let newArray = [1, 2, 10, 4, 5, 6, 2];
// let k = 2;
// let l = 3;
// let count = 0;
// let check = 0;
// for(let i = 0; i < newArray.length; i++){
//   if(i < k || i > l){
//     count += newArray[i];
//     check++;
//   }
// }
// console.log(count / check);

// Array24

// let newArray = [3, 6, 9, 12, 13];
// let a = newArray[1] - newArray[0];
// let count = 0;
// for(let i = 1; i < newArray.length; i++){
//     if(newArray[i] == newArray[i - 1] + a){
//       count += 0;
//     } else{
//       count++;
//       break;
//     }
//   }
//   if(count == 0){
//     console.log(a);
//   } else{
//     console.log(0);
//   }
  
  // Array25
  

  
//   let newArray = [3, 9, 27, 81, 243];
//   let a = Math.floor(newArray[1] / newArray[0]);
//   let count = 0;
//   for(let i = 1; i < newArray.length; i++){
//     if(newArray[i] == newArray[i - 1] * a){
//       count += 0;
//     } else{
//       count++;
//       break;
//     }
//   }
//   if(count == 0){
//     console.log(a);
//   } else{
//     console.log(0);
//   }

  
  
  
  // Array26

//   let newArray = [2, 1, 2, 1, 2, 1];
//   let count = 0;
//   let i = 0;
  
//   if(newArray[0] % 2 == 0){
//     for(let j = 0, i = 1; j < newArray.length; j += 2, i += 2){
//       if(newArray[j] % 2 == 0){
//         count += 0;
//       } else{
//         count = j;
//         break;
//       }
//       if(newArray[i] % 2 != 0){
//         count += 0;
//       } else{
//         count = i;
//         break;
//       }
//     }
//   } else{
//     for(let j = 0, i = 1; j < newArray.length; j += 2, i += 2){
//       if(newArray[j] % 2 != 0){
//         count += 0;
//       } else{
//         count = j;
//         break;
//       }
//       if(newArray[i] % 2 == 0){
//         count += 0;
//       } else{
//        count = i;
//         break;
//       }
//     } 
//   }
//   if(count == 0){
//     console.log(0);
//   } else{
//     console.log(count);
//   }

  
  // Array27

//   let newArray = [-1, 2, -2, 3, -3, 4];
//   let count = 0;
//   let j = 0;

//   if(newArray[0] < 0){
//     for(let i = 0, j = 1; i < newArray.length; i += 2, j += 2){
//       if(newArray[i] < 0){
//         count += 0;
//       } else{
//         count = i;
//         break;
//       }
//       if(newArray[j] > 0){
//         count += 0;
//       } else{
//         count = j
//         break;
//       }
//     }
//   } else{
//     for(let i = 0, j = 1; i < newArray.length; i += 2, j += 2){
//       if(newArray[i] > 0){
//         count += 0;
//       } else{
//         count = i;
//         break;
//       }
//       if(newArray[j] < 0){
//         count += 0;
//       } else{
//         count = j;
//         break;
//       }
//     }
//   }
//   if(count == 0){
//     console.log(0);
//   } else{
//     console.log(count);
//   }

  
  
  // Array28
  

//   let newArray = [22, 4, 11, 5, 6, 7, 11, 3, 12];
//   let smallArray = [];

//   for(let i = 0; i < newArray.length; i++){
//     if(i % 2 == 0){
//       smallArray[smallArray.length] = newArray[i];
//     }
//   }
//   console.log(Math.min(...smallArray));

  
  // Array29
  
//   let newArray = [22, 43, 11, 5, 6, 7, 11, 31, 12];
//   let smallArray = [];

//   for(let i = 0; i < newArray.length; i++){
//     if(i % 2 != 0){
//       smallArray[smallArray.length] = newArray[i];
//     }
//   }

//   console.log(Math.max(...smallArray));


// Array 51

// let aarray = [6, 7, 8, 9, 10];
// let barray = [1, 2, 3, 4, 5, 7, 9];
// let c = barray;
// barray = aarray;
// aarray = c;
// console.log(barray, aarray);


// Array 52

// let aarray = [2, 3, 4, 5, 6, 7, 8];
// let barray = [];
// for(let i = 0; i < aarray.length; i++){
//   if(aarray[i] < 5){
//     barray[i] = 2 * aarray[i];
//   } else{
//     barray[i] = aarray[i] / 2;
//   }
// }
// console.log(barray);


// Array 53

// let aarray = [3, 4, 1, 9, 8];
// let barray = [1, 6, 5, 1, 11];
// let carray = [];
// for(let i = 0; i < aarray.length; i++){
//   if(aarray[i] > barray[i]){
//     carray[i] = aarray[i];
//   } else{
//     carray[i] = barray[i];
//   }
// }
// console.log(carray);

// Array 54

// let aarray = [2, 5, 3, 7, 9, 12, 8];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   if(aarray[i] % 2 == 0){
//     barray[barray.length] = aarray[i];
//     count++;
//   }
// }
// console.log(barray, count);


// Array 55

// let aarray = [3, 2, 4, 6, 3, 5, 8, 1, 2];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   for(let j = i; j % 2 != 0; j++){
//     barray[barray.length] = aarray[j];
//     count++;
//   }
// }
// console.log(barray, count);

// Array 56



// let aarray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// let barray = [];
// let count = 0;
// for(let i = 3; i < aarray.length; i += 3){
//   barray[barray.length] = aarray[i];
//   count++;
// }
// console.log(barray, count);


// Array 57

// let aarray = [12, 26, 66, 45, 66, 43, 12];
// let barray = [];
// for(let i = 0; i < aarray.length; i++){
//   for(let j = i; j % 2 == 0; j++){
//     barray[barray.length] = aarray[j];
//   }
// }
// for(let i = 0; i < aarray.length; i++){
//   for(let j = i; j % 2 != 0; j++){
//     barray[barray.length] = aarray[j];
//   }
// }
// console.log(barray);


// Array 58

// let aarray = [1, 4, 6, 2, 8, 7, 3];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   count += aarray[i];
//   barray[barray.length] = count;
// }
// console.log(barray);


// Array 59

// let aarray = [1, 4, 6, 2, 8, 7, 3];
// let barray = [];
// let count = 0;
// for(let i = 0; i < aarray.length; i++){
//   count += aarray[i] / 2;
//   barray[barray.length] = count;
// }
// console.log(barray);


// Array 60

// let aarray = [1, 2, 3, 4, 5, 6, 7, 8];
// let barray = [];
// for(let i = 0; i < aarray.length; i++){
//   let count = 0
//   for(let j = i; j < aarray.length; j++){
//     count += aarray[j];
//   }
//   barray[i] = count;
// }
// console.log(barray);
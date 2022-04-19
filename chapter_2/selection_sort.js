function findSmallest(array) {
  let smallest = array[0];
  let smallest_index = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(i)
  }

//   for (let i = 1; i < array.length; i++) {
//     if(array[i] < smallest) {
//       smallest = array[i];
//       smallest_index = i;
//     }
//   }
//   return smallest_index;
}

function selectionSort(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let smallest = findSmallest(array);
    // console.log(smallest)
  }
  return newArray;
}

const array = [5, 3, 6, 2, 10]
let sortedArray = selectionSort(array);
console.log(sortedArray);
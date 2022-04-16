
function binary_search(list, item) {
  let low = 0
  let high = list.length - 1

  while(low <= high) {
    mid = (low + high) / 2

    guess = list[mid]
  
    if(guess == item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }

  }
  return null;
}

const my_list = [1, 3, 5, 7, 9]

const ans1 = binary_search(my_list, 3)
// const ans2 = binary_search(my_list, -1)

console.log('The Answer is: ', ans1)
// console.log(ans2)

function binarySearch (arr, target) {
  let start = 0, end = arr.length-1
  while (start <= end) {
    const mid = parseInt((start+end)/2)
    if (arr[mid] > target) {
      end = mid-1
    } else if (arr[mid] < target) {
      start = mid+1
    } else {
      return mid
    }
  }
  return false
}

const arr = [1, 2, 5, 8, 10, 20, 40, 56, 73, 89]
console.log(binarySearch(arr, 56))
console.log(binarySearch(arr, 404))

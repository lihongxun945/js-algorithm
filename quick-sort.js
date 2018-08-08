function quick (arr) {
  if (arr.length <= 1) return arr

  const m = parseInt(arr.length/2)

  const left = [], right = []

  for(let i=0; i<arr.length; i++) {
    if (i === m) continue;
    const d = arr[i]
    if (d < arr[m]) left.push(d)
    else right.push(d)
  }

  return quick(left).concat([arr[m]], quick(right))
}

const arr = [85, 24, 63, 45, 17, 31, 96, 50]

console.log(quick(arr))

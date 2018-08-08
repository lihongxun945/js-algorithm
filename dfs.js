// tree defination
const Node = function (v, l, r) {
  this.value = v
  this.left = l
  this.right = r
}

const root = new Node(5,
   new Node(2,
     new Node(9),
     new Node(1)
   ),
  new Node(3,
    undefined,
    new Node(7)
  )
)

// 先序优先遍历
// 递归实现
function preOrderR (root) {
  if (!root) return []
  if (!root.left && !root.right) return [root.value]
  return [root.value].concat(preOrderR(root.left), preOrderR(root.right))
}

// 非递归实现

function preOrder (root) {
  if (!root) return []
  const result = []
  const stack = []

  let n = root

  while(n || stack.length) {
    if (n) {
      stack.push(n)
      result.push(n.value)
      n = n.left
    } else {
      n = stack.pop().right
    }
  }

  return result
}


// 中序优先遍历
// 递归实现
function inOrderR (root) {
  if (!root) return []
  if (!root.left && !root.right) return [root.value]
  return inOrderR(root.left).concat([root.value], inOrderR(root.right))
}

// 非递归实现

function inOrder (root) {
  if (!root) return []
  const result = []
  const stack = []

  let n = root

  while(n || stack.length) {
    if (n) {
      stack.push(n)
      n = n.left
    } else {
      let nn = stack.pop()
      result.push(nn.value)
      n = nn.right
    }
  }

  return result
}

// 后序优先遍历
// 递归实现
function postOrderR (root) {
  if (!root) return []
  if (!root.left && !root.right) return [root.value]
  return postOrderR(root.left).concat(postOrderR(root.right), [root.value])
}

// 非递归实现
function postOrder (root) {
  if (!root) return []
  const result = []
  const stack = []

  let n = root

  while(n || stack.length) {
    if (!n) {
      let n = stack.pop()
      if (!n.right || n.right._done) {
        result.push(n.value)
        n._done = true
      } else {
        stack.push(n)
        n.right && stack.push(n.right)
      }

      n = undefined
    } else {
      stack.push(n)
      n.right && stack.push(n.right)
      n = n.left
    }
  }

  return result
}


console.log(preOrder(root))
console.log(preOrderR(root))
console.log(inOrder(root))
console.log(inOrderR(root))
console.log(postOrderR(root))
console.log(postOrder(root))

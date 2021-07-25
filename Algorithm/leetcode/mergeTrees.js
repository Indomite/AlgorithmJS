// 合并二叉树

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var mergeTrees = function(root1, root2) {
  const preOrder = (root1, root2) => {
    // 如果当前节点，没有则另一个的值
    if(!root1) return root2
    if(!root2) return root1
    // 两个节点的值相加
    root1.val += root2.val
    // 同步到相同的子节点
    root1.left = preOrder(root1.left, root2.left)
    root1.right = preOrder(root1.right, root2.right)
    return root1
  }
  return preOrder(root1, root2)
};
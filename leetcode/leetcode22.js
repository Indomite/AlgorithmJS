/* 
  22. 括号生成
  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

  回溯剪枝，将问题转换成二叉树的问题，再碰到做括号比右括号还多时，将剩下的剪枝
*/

var generateParenthesis = function(n) {
  const res = []
  const dfs = (l, r, str) => {
    if(str.length == 2*n) {
      res.push(str)
      return
    }
    if (l > 0) {      // 剩余的做括号数量大于0
      dfs(l - 1, r, str + "(");
    }
    if (l < r) {      // 剩余的右括号数量比左括号多
      dfs(l, r - 1, str + ")");
    }
  }
  dfs(n, n, "")
  return res
};

console.log(generateParenthesis(3));

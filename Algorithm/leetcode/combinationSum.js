// 组合总和

/* 
  回溯法剪枝
*/

var combinationSum = function(candidates, target) {
  const len = candidates.length
  const result = []

  const dfs = (currentIndex,currentTarget,path)=>{
      //小于0的节点是叶子节点
      if(currentTarget < 0){
          return
      }
      //等于0的节点也是叶子节点，并且从根节点到这里的path值是需要的的目标值
      if(currentTarget === 0){
          result.push(path.slice())
          return
      }
      for (let index = currentIndex; index < len; index++) {
          path.push(candidates[index])
          dfs(index,currentTarget - candidates[index],path)
          path.pop()
      }
  }
  dfs(0,target,[])

  return result

};

console.log(combinationSum([2,3,6,7],7));

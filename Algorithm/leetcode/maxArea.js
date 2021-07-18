// 最大子序和

/*
    给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai)
    在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)
    找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
*/
/* var maxArea = function(height) {
    let max = 0
    for(let i=0;i < height.length;i++){
        for(let j=height.length-1;j > 0;j--){
            let len = j-i
            let hei = height[i] > height[j] ? height[j] : height[i]
            let container = len * hei
            container > max ? max = container : max = max
        }
    }
    return max
}; */
// 超时

var maxArea = function(height) {
    let max = 0
    let i = 0
    let j = height.length-1
    while(i < j){
        let len = j-i
        let hei = height[i] > height[j] ? height[j--] : height[i++]
        let container = len * hei
        container > max ? max = container : max = max
    }
    return max
};

console.log(maxArea([1,2,1]));
var minArray = function(numbers) {
    let res = numbers[0]
    for(let i=0;i < numbers.length;i++){
        if(numbers[i]<res){
            return numbers[i]
        }
    }
    return res
};
console.log(minArray([1,3,5]));
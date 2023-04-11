let arr = [1,2,3,4,5,6,7,8,9,10]


function arrSum(array){
    let sum = 0
    for(let num of array){
        sum += num
    }
    return sum
}

console.log(arrSum(arr));
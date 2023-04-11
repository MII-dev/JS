let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function fndMax(array){
    
    let max = array[0]
    let min = array[0]

    for(let num of array){
        if(num > max){
            max = num
        }
        if(num < min){
            min = num
        }
    }
    return 'Max: ' + max + ', Min: ' + min
}

console.log(fndMax(arr))
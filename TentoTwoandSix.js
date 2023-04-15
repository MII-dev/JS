document.getElementById('tentotwo').addEventListener('click', function(){
    let input = prompt('Enter num')
    alert('Binary : ' + bitCalcToBinary(input) + '\n' + '16 : ' + bitCalcToSix(input))
    
})

function bitCalcToBinary(inputnum){
    
    let result = ''

    while(inputnum > 0){
        result = (inputnum % 2) + result
        inputnum = Math.floor(inputnum / 2)
    }
    return result
}

function bitCalcToSix(inputnum){
    
    let result = ''

    while(inputnum > 0){
        let left = inputnum % 16
        switch((left)){
            case 10:
                result = 'A' + result
                break;
            case 11:
                result = 'B' + result
                break;
            case 12:
                result = 'C' + result
                break;
            case 13:
                result = 'D' + result
                break;
            case 14:
                result = 'E' + result
                break;
            case 15:
                result = 'F' + result
                break;
            default:
                result = left + result
                break;
        }
        inputnum = Math.floor(inputnum / 16)
    }
    return result

}
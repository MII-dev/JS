function askNum(){
    let input = prompt('Enter input:');
    alert(factorial(input))
}

function factorial(input) {
    if(input !== 1){
        input *= factorial(input-1)
    }
    return input
}

document.getElementById('butFact').addEventListener('click', function(){
    askNum()
})

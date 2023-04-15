
function askChoose(){
    let choose = prompt('Enter Choose ( Scissors, Rock, Paper )')
    srp(choose)
}



function srp(choose){
    let arrChoose = ['Scissors', 'Rock', 'Paper']
    let rand = Math.floor(Math.random() * arrChoose.length)
    switch(choose){
        case 'Scissors':
            if(arrChoose[rand] == 'Rock'){
                alert('You lose')
            }else if(arrChoose[rand] == 'Paper'){
                alert('You Win')
            }else{
                alert('Try again')
            }
            break;
        case 'Rock':
            if(arrChoose[rand] == 'Paper'){
                alert('You lose')
            }else if(arrChoose[rand] == 'Scissors'){
                alert('You Win')
            }else{
                alert('Try again')
            }
            break;
        case 'Paper':
            if(arrChoose[rand] == 'Scissors'){
                alert('You lose')
            }else if(arrChoose[rand] == 'Rock'){
                alert('You Win')
            }else{
                alert('Try again')
            }
            break;
        default:
            alert('Wrong enter. Try again')
            askChoose()
            break;
    }
}

document.getElementById('srp').addEventListener('click', function(){
    askChoose()
})
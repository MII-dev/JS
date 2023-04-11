
function askTemp(){
    let temp = prompt('Enter temperature: ')
    alert(temp + ' Far to Cel = ' + fToc(temp) + '\n' + temp + ' Cel to Far = ' + cTof(temp))
}

function fToc(temp){
    return (temp - 32) * 5/9
}

function cTof(temp){
    return (temp * 9/5) + 32
}

document.getElementById('butFtoC').addEventListener('click', function(){
    askTemp()
})


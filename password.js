document.getElementById('password').addEventListener('click', function(){
    alert(genPassword(prompt('Enter password length')))
})

function genPassword(length){
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = ''


    
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
    }
    return password
}
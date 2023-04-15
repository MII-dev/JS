function timeZone(){
    
    let now = new Date()

    let greenwichTime = now.toUTCString()
    let kyivTime = now.toLocaleString('en-US', { timeZone: 'Europe/Kyiv'})
    let newyorkTime = now.toLocaleString('en-US', { timeZone: 'America/New_York'})

    document.getElementById('greenwich-time').textContent = greenwichTime
    document.getElementById('kyiv-time').textContent = kyivTime
    document.getElementById('newyork-time').textContent = newyorkTime



}
setInterval(timeZone, 1000)

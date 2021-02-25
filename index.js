var start = false
document.getElementById('btn1').addEventListener('click', function () {

    document.getElementById('main1').style.display = 'none'
    document.getElementById('counter').style.display='block'

setTimeout(noob,6000)


 function noob(){


    document.getElementById('counter').style.display='none'
    start=true
   
    document.getElementById('main1').style.display = 'none'

    while (start) {
        var random = Math.round(Math.random() * 10)
        
        if (random === 1) {
            document.getElementById('Groza').style.display = 'block'
            break
        }
        if (random === 5) {
            document.getElementById('m416').style.display = 'block'
            break
        }
        if (random === 7) {
            document.getElementById('awm').style.display = 'block'
            break
        }
       
        else {
            document.getElementById('nothing').style.display='block'
            break
            
        }
    }
    var abc = function () {
        document.getElementById('go').style.display = 'block'
        document.getElementById('go').addEventListener('click', function () {
            document.getElementById('main1').style.display = 'block'
            document.getElementById('Groza').style.display = 'none'
            document.getElementById('nothing').style.display='none'
            document.getElementById('go').style.display = 'none'
            document.getElementById('m416').style.display = 'none'
            document.getElementById('awm').style.display = 'none'
        })
    }
    abc()




 }  
})
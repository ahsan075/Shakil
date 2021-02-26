var start = false
document.getElementById('btn1').addEventListener('click', function () {

    document.getElementById('main1').style.display = 'none'
    document.getElementById('counter').style.display = 'block'

    setTimeout(noob, 6000)


    function noob() {

        document.getElementById('counter').style.display = 'none'



        document.querySelector('.img1').style.display = 'block'


        setTimeout(bot, 3500)

        function bot() {


            document.querySelector('.img1').style.display = 'none'



            start = true

            document.getElementById('main1').style.display = 'none'

            while (start) {
                var random = Math.round(Math.random() * 30)


                if (random === 1) {
                    document.getElementById('Groza').style.display = 'block'
                    break
                }
                if (random === 3) {
                    document.getElementById('helmet').style.display = 'block'
                    break
                }
                if (random === 4) {
                    document.getElementById('bag1').style.display = 'block'
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
                if (random === 8) {
                    document.getElementById('dress1').style.display = 'block'
                    break
                }




                if (random === 9) {
                    document.getElementById('helmet2').style.display = 'block'
                    break
                }
                if (random === 11) {
                    document.getElementById('dress5').style.display = 'block'
                    break
                }
                if (random === 12) {
                    document.getElementById('scarL').style.display = 'block'
                    break
                }
                if (random === 13) {
                    document.getElementById('bag2').style.display = 'block'
                    break
                }
                if (random === 15) {
                    document.getElementById('akm').style.display = 'block'
                    break
                }
                if (random === 16) {
                    document.getElementById('dress2').style.display = 'block'
                    break
                }
                if (random === 18) {
                    document.getElementById('m249').style.display = 'block'
                    break
                }
                if (random === 20) {
                    document.getElementById('dress3').style.display = 'block'
                    break
                }
                if (random === 23) {
                    document.getElementById('bag3').style.display = 'block'
                    break
                }
                if (random === 24) {
                    document.getElementById('dp').style.display = 'block'
                    break
                }
                if (random === 26) {
                    document.getElementById('helmet3').style.display = 'block'
                    break
                }
                if (random === 27) {
                    document.getElementById('dress4').style.display = 'block'
                    break
                }
                if (random === 29) {
                    document.getElementById('flayer').style.display = 'block'
                    break
                }
                else {
                    document.getElementById('nothing').style.display = 'block'
                    break

                }
            }
            var abc = function () {
                document.getElementById('go').style.display = 'block'
                document.getElementById('go').addEventListener('click', function () {
                    document.getElementById('main1').style.display = 'block'
                    document.getElementById('Groza').style.display = 'none'
                    document.getElementById('nothing').style.display = 'none'
                    document.getElementById('go').style.display = 'none'
                    document.getElementById('m416').style.display = 'none'
                    document.getElementById('awm').style.display = 'none'
                    document.getElementById('helmet').style.display = 'none'
                    document.getElementById('helmet2').style.display = 'none'
                    document.getElementById('helmet3').style.display = 'none'
                    document.getElementById('dress5').style.display = 'none'
                    document.getElementById('dress4').style.display = 'none'
                    document.getElementById('dress3').style.display = 'none'
                    document.getElementById('dress2').style.display = 'none'
                    document.getElementById('dress1').style.display = 'none'
                    document.getElementById('bag1').style.display = 'none'
                    document.getElementById('bag2').style.display = 'none'
                    document.getElementById('bag3').style.display = 'none'
                    document.getElementById('scarL').style.display = 'none'
                    document.getElementById('m249').style.display = 'none'
                    document.getElementById('flayer').style.display = 'none'
                    document.getElementById('dp').style.display = 'none'
                    document.getElementById('akm').style.display = 'none'
                    
                })
            }
            abc()


        }



    }
})
$(document).ready(function() {
    let currentHost = window.location.hostname;
    data = {
        currentHost:currentHost
    }
    $.ajax({
        url:'https://automation.analyticsvidhya.com/flashstrip/getstrip/',
        // url: 'http://127.0.0.1:8000/flashstrip/getstrip/',
        // xhrFields: {
        //     withCredentials: true
        // },
        data: data,
        type: "POST",
        timeout: 3000,
        async:false,
        success: function (response) {
            console.log(response);
            if( response ){
                const cookie_val = (document.cookie.match(/^(?:.*;)?\s*flashStrip\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
                console.log(cookie_val)
                console.log(response)

                if(cookie_val != 0){
                    $('#avFlashSale').show()
                    $("#avFlashSale p").html(response['text'])
                    if (response['button_text']){
                        $("#avFlashSale a").html(response['button_text'])
                        $("#hrefId").attr('href', response['url'])
                    }
                    else{
                        $("#avFlashSale a")[0].style.display = 'none';
                    }
                    if(response['timer_end_date']){
                        $('#clockdiv').show();
                        // console.log();
                        const deadline = moment(response['timer_end_date'], moment.ISO_8601).toDate()
                        // console.log(response['timer_end_date'].replace(/-/g, '/'))
                        // deadline = new Date(response['timer_end_date'].replace(/-/g, '/')).getTime()
                        console.log(deadline)
                        setFlashStripTimer(deadline)
                    }
                }   
            }
        },
    })
})


    // if (deadline != null)
    // var deadline = new Date("sep 25, 2020 23:59:59").getTime();
const setFlashStripTimer = (deadline) => {
    console.log(deadline)
    if (deadline){
        var x = setInterval(function() {
            var now = new Date().getTime();
            var differnce_in_time = deadline - now;
            var days = Math.floor(differnce_in_time / (1000 * 60 * 60 * 24));
            var hours = Math.floor((differnce_in_time %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((differnce_in_time % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((differnce_in_time % (1000 * 60)) / 1000 );
        
            if(seconds<10) {
                seconds = '0'+seconds;
            }
        
            if(minutes < 10) {
                minutes = '0'+minutes;
            }
        
            if(hours < 10) {
                hours = '0'+hours;
            }
        
            if(days < 10) { 
                days = '0'+days;
            }
        
            document.getElementById("day").innerHTML =days ;
            document.getElementById("hour").innerHTML =hours;
            document.getElementById("minute").innerHTML = minutes;
            document.getElementById("second").innerHTML =seconds;
            if (differnce_in_time < 0) {
                clearInterval(x);
                document.getElementById("clockdiv").style.display = "none";
                document.getElementById("day").innerHTML ='0';
                document.getElementById("hour").innerHTML ='0';
                document.getElementById("minute").innerHTML ='0' ;
                document.getElementById("second").innerHTML = '0'; }
            }, 1000);
    }
}
    
    

$("#avFlashSale .close").click(function(e){
    e.preventDefault();
    $('#avFlashSale').css("display","none");
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*36000;
    now.setTime(expireTime);
    console.log("closing flash strip, ",now.toUTCString());
    document.cookie = 'flashStrip=0;expires='+now.toUTCString()+';path=/';
})
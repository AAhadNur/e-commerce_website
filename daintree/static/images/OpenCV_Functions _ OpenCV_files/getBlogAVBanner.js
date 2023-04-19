$(document).ready(function() {
    bannerPositions = []
    if ((window.location.hostname == "www.analyticsvidhya.com")){
        if (document.getElementById('popup-banner')) bannerPositions.push('popup-banner')
        if (document.getElementById('side-upper-banner')) bannerPositions.push('side-upper-banner')
        if (document.getElementById('side-lower-upper-banner')) bannerPositions.push('side-lower-upper-banner')
        if (document.getElementById('side-lower-lower-banner')) bannerPositions.push('side-lower-lower-banner')
    }
    pageUrl = 'https://'+window.location.hostname+window.location.pathname
    dataDict = {'pageUrl': pageUrl, 'currentHost': window.location.hostname, 'bannerPositions': bannerPositions}
    dataDict={'data':JSON.stringify(dataDict)};
    // console.log('datadict',dataDict)
        $.ajax({
            
            url: 'https://automation.analyticsvidhya.com/avbanner/getavbanner/',
            type: 'post',
            data:dataDict,

            success: function(response){
                console.log(response)
                // console.log('datadict',dataDict)
                responseData = response
                for(banner_id in responseData){
                    if(window.location.hostname !== "www.analyticsvidhya.com" && Object.keys(responseData[banner_id]).length === 0 && responseData[banner_id].constructor === Object){
                        $("#"+ banner_id +" img").remove()
                        $("#"+ banner_id +" a").remove()
                    }
                    else{
                        $("#"+ banner_id +" img").css('display','block')
                        for(tag in responseData[banner_id]){
                            for(attribute in responseData[banner_id][tag]){
                                $("#"+ banner_id +" "+tag).attr(attribute,responseData[banner_id][tag][attribute]) 
                                $("#"+ banner_id +" "+tag).removeAttr("srcset")
                            }    
                        }
                    }
                }
            }
         });           
});

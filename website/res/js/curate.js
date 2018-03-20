$(document).ready(function(){
        $.getJSON("itineraries.json",function(data){
//            alert(data[0].tripName);
            for(var i=1;i<data.length+1; i++){
                $('.card'+i).find('.card-title').html(data[i-1].tripName);
                $('.card'+i).find('.card-text').html(data[i-1].tripDesc);
            }

        });


        $(".btn").click(function(){
            var index = $('.btn').index($(this));
//            alert(index);
            localStorage.setItem('tourIndex',index);
            window.location.href = "curateDetails.html"
        });  
})
$(document).ready(function(){
    
//    alert("33 Districts");
    var index = localStorage.getItem('tourIndex');
    
    var indexInt = parseInt(index)+1;
    var listItem = $('.sightListItem').detach();
    
    $('.tourImage').attr('src','./res/img/curate' + indexInt + '.jpg');
    
//    alert("./res/img/curate");
    
    $.getJSON("itineraries.json",function(data){
//            alert(data[0].tripName);
            for(var i=0;i<data[index].sightsList.length; i++){
                var listItemClone = listItem.clone();
                
                listItemClone.find('.sightName').html(data[index].sightsList[i].sightName);
                
                listItemClone.find('.time1').html(data[index].sightsList[i].timeRequired);
                
                listItemClone.find('.time2').html(data[index].sightsList[i].timeToReach);
                
                $('.sightListUL').append(listItemClone)
            }

        });

    
});
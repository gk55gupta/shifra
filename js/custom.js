$(function(){
    $('body').click(function() {
        $('.notification').hide('500');
     });
    
     $('.notification-div').click(function(e){
        //  console.log(e);
         e.stopPropagation();
     });
    
     $('.notification-icon').click(function(e) {
         $('.notification').toggle({},500);
     });;

});

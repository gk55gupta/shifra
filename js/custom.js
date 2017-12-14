$(function(){
    

    $( ".myNav li" )
    .mouseenter(function() {
        // alert('x');
      $( this ).find( "a" ).css('color','black');
    })
    .mouseleave(function() {
        $( this ).find( "a" ).css('color','white');
    });
});

$(function(){
    var header = '<div class="container"><div class="nav-container"> <a href="#"> <img src="images/logo.png" class="logo" alt="shifra"> </a><div class="abs header-icon"> <a href="#"> <img src="images/cart-icon.png" alt="cart-icon" style="width: 28px;"> </a><div class="notification-div rel"> <a class="notification-icon" href="#" class=""> <img src="images/bell-icon.png" alt="bell-icon" style="width: 22px;"> </a><div class="abs notification"> <span class="triangle"></span><div class="notification-header"><h3>Notification</h3></div><div class="notification-body"><div class="notification-item"><p>some text here <br> some text here <br> some text here <br> some text here</p></div><hr><div class="notification-item"><p>some text here <br> some text here <br> some text here <br> some text here</p></div><hr><div class="notification-item"><p>some text here <br> some text here <br> some text here <br> some text here</p></div><hr></div></div></div><div class="search-div rel"> <a class="search-icon" href="#"> <img src="images/search-icon.png" alt="search-icon" style="width: 25px;"> </a><div class="search abs"><form class="form"> <input class="abs form-control col-sm-6" placeholder="Search Here"> <a href="#" class="btn btn-default abs">Search</a></form></div></div></div></div></div> <nav class="navbar myNav"><div class="container"><div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-center"><li class=""> <a href="index.html">HOME <span class="sr-only">(current)</span> </a></li> <span style="color: white">|</span><li class=""> <a href="#">PEDIGREE</a></li> <span style="color: white">|</span><li class=""> <a href="#">WHY SHIFRAA?</a></li> <span style="color: white">|</span><li class=""> <a href="#">PRODUCTS</a></li> <span style="color: white">|</span><li> <a href="contact-us.html" class="last-item">CONTACT US</a></li></ul></div></div> </nav>';
    $('header').append(header);

    $('body').click(function() {
        $('.notification').hide('500');
        $('.search').hide();
     });
    
     $('.notification-div').click(function(e){
        //  console.log(e);
         e.stopPropagation();
     });
    
     $('.notification-icon').click(function(e) {
         $('.notification').toggle({},500);
     });

    $('.search-div').click(function(e){
        e.stopPropagation();
    });

    $('.search-icon').click(function(e) {
        $('.search').toggle();
        $('.notification').hide('500');
    });;    

    
    // $('.anim-slide > div').addClass('hero-heading'); 
});

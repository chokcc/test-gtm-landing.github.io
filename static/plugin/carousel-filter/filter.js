function showProjectsbyCat( cat ){
  if ( cat == 'all'){
    $('#projects-hidden .project').each(function(){
       var owl   = $(".owl-carousel").data('owlCarousel');
       elem      = $(this).parent().html();

       owl.addItem( elem );
       $(this).parent().remove();
    });
  }else{
    $('#projects-hidden .project.'+ cat).each(function(){
       var owl   = $(".owl-carousel").data('owlCarousel');
       elem      = $(this).parent().html();

       owl.addItem( elem );
       $(this).parent().remove();
    });

    $('#projects-carousel .project:not(.project.'+ cat + ')').each(function(){
       var owl   = $(".owl-carousel").data('owlCarousel');
       targetPos = $(this).parent().index();
       elem      = $(this).parent();

       $( elem ).clone().appendTo( $('#projects-hidden') );
       owl.removeItem(targetPos);
    });
  }
}

$(window).load(function(){
  
    //Click event for filters
    $('#project-terms a').click(function(e){
        e.preventDefault();
        $('#project-terms a').removeClass('active');

        cat = $(this).attr('ID');
        $(this).addClass('active');
        showProjectsbyCat( cat );
        //alert('filtering'+ cat);
    });
  
   //Initialize owl carousel
    $("#projects-carousel").owlCarousel({
 
    // Most important owl features
    items : 3
    }
  );
});
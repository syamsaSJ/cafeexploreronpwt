var sectionArray = [1, 2, 3, 4, 5];

// $.each(sectionArray, function(index, value){
          
//      $(document).scroll(function(){
//          var offsetSection = $('#' + 'section_' + value).offset().top - 154;
//          var docScroll = $(document).scrollTop();
//          var docScroll1 = docScroll + 1;
         
        
//          if ( docScroll1 >= offsetSection ){
//              $('.navbar-nav .nav-link').removeClass('active');
//              $('.navbar-nav .nav-link:link').addClass('inactive');  
//              $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
//              $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
//          }
         
//      });
    
//     $('.click-scroll').eq(index).click(function(e){
//         var offsetClick = $('#' + 'section_' + value).offset().top - 154;
//         e.preventDefault();
//         $('html, body').animate({
//             'scrollTop':offsetClick
//         }, 300)
//     });
    
// });

$(document).ready(function(){
    // Tambahkan kelas active ke tautan yang sesuai dengan halaman yang sedang dibuka
    var currentLocation = window.location.pathname;
    $('.navbar-nav .nav-item .nav-link').each(function () {
        var href = $(this).attr('href');
        if (currentLocation.indexOf(href) !== -1) {
            $(this).addClass('active');
            $(this).removeClass('inactive');
        } else {
            $(this).removeClass('active');
            $(this).addClass('inactive');
        }
    });
});

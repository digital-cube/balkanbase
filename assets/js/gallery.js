    
 var imagesgall = [
                {
                    'smallUrl':'img-t1.png',
                    'bigUrl':'new/img-1.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t2.png',
                    'bigUrl':'new/img-2.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t3.png',
                    'bigUrl':'new/img-3.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t4.png',
                    'bigUrl':'new/img-4.png',
                    'title': '',
                    'alt': '',
                },
                   {
                    'smallUrl':'img-t5.png',
                    'bigUrl':'new/img-5.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t6.png',
                    'bigUrl':'new/img-6.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t7.png',
                    'bigUrl':'new/img-7.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t8.png',
                    'bigUrl':'new/img-8.png',
                    'title': '',
                    'alt': '',
                },
                     {
                    'smallUrl':'img-t9.png',
                    'bigUrl':'new/img-9.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t10.png',
                    'bigUrl':'new/img-10.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t11.png',
                    'bigUrl':'new/img-11.png',
                    'title': '',
                    'alt': '',
                },
                {
                    'smallUrl':'img-t12.png',
                    'bigUrl':'new/img-12.png',
                    'title': '',
                    'alt': '',
                },
              
 ];

gall_draw(imagesgall);
function gall_draw(imagesgall){
    imagesgall.forEach(function(img){
        var galleryHolder =  '<div class="col-lg-2 col-md-2 col-xs-6 thumb">'+
              '<a class="thumbnail" data-toggle="modal" data-target="#" href="#">'+
              '<img class=" imgSmall img-responsive" data-id="'+img['bigUrl']+'" src="./assets/images/gall/new/'+img['smallUrl']+'" alt="">'+
              '</a></div>';
             // no++;
         $('#gallery-holder').append(galleryHolder);
        });
} 
$(document).ready(function() {


    function onkeypress(){
        $(document).on('keyup',function(evt) {
            if (evt.keyCode == 27) {
                $("#imgBig").attr("src", "");
                $("#overlay").fadeOut();
                $("#overlayContent").fadeOut();

            }


        });
    }


//gallery add        
$(".imgSmall").click(function(){
    onkeypress()
    var takeSrc = $(this).attr('data-id');
    $("#imgBig").show();
    $("#imgBig").attr("src","./assets/images/gall/"+takeSrc);
    $("#overlay").fadeIn();
    $("#overlayContent").fadeIn();
});

$("#overlayContent,#overlay").click(function(){
    $("#imgBig").attr("src", "");
    $("#imgBig").hide();
    $("#show-video").html('');
    $("#overlay").fadeOut();
    $("#overlayContent").fadeOut();
});


});
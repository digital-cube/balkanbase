$(document).ready(function() {
 var videos = { 
                "1" : {
                    "title":"MT Casale ws base jump, belly cam",
                    "img": "video-thumb.png",
                    "link": '<iframe width="560" height="315" src="https://www.youtube.com/embed/hT_nvWreIhg?list=RD5j1RCys4R0g" frameborder="0" allowfullscreen></iframe>',
                },
                "2" : {
                    "title":"MT Casale ws base jump, belly cam",
                    "img": "video-thumb.png",
                    "link": '<iframe width="560" height="315" src="https://www.youtube.com/embed/hT_nvWreIhg?list=RD5j1RCys4R0g" frameborder="0" allowfullscreen></iframe>',
                },
                "3" : {
                    "title":"MT Casale ws base jump, belly cam",
                    "img": "video-thumb.png",
                    "link": '<iframe width="560" height="315" src="https://www.youtube.com/embed/hT_nvWreIhg?list=RD5j1RCys4R0g" frameborder="0" allowfullscreen></iframe>',
                },

            };

    var template = '';
    video_draw(videos);

    function video_draw(videos){
            var i =0;

     Object.keys(videos).forEach(function(p){      
                var vid=videos[p];
                i++;
                template += '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">'+
                            '<div class="video-thumb" style="background: url(\'./assets/images/'+vid.img+'\') no-repeat;"> '+
                            ' <img class="play-btn pressed" data-id='+i+' src="./assets/images/play-gray.png"/> '+
                            '</div> '+
                            '<h4>'+vid.title+'</h4> '+
                            '<div class="btn-join btn-join-vim">WATCH ON VIMEO</div> '+
                            '</div>';  

     });
     $('#video-holder').html(template);  
    }
    
    // pressed - take data-id from img tag when guest mouseover play-img //
    var pressed = 0;
 
    $(document).on('click','.pressed',function() { 
                $("#imgBig").hide();
                $("#show-video").html(videos[pressed].link);
                $("#overlay").fadeIn();
                $("#overlayContent").fadeIn();
          
    });  
      

    //---video section - on mouse enter change play img and border color ----//     
    $('.video-thumb').on('mouseenter',function(){
        
       $(this).css('border','2px solid orange');

       $('.play-btn').on('mouseenter',function(){
           var image = $(this).attr('src', './assets/images/play-orange.png');
            pressed  =  $(this).attr('data-id');

       }).on('mouseleave',function(){
           var image = $(this).attr('src', './assets/images/play-gray.png');
           pressed=0;
       });
    
    }).on('mouseleave',function(){
           $(this).css('border','2px solid gray');

       });


});
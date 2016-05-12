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

     video_draw(videos);
     var template = '';
     function video_draw(videos){
        var i =0;
     Object.keys(videos).forEach(function(p){      
                var vid=videos[p];
                i++;
                 template += '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">'+
                                    '<div class="video-thumb" style="background: url("./assets/images/'+vid.img+'") no-repeat;"> '+
                                       ' <img class="play-btn munira" data-id='+i+' src="./assets/images/play-gray.png"/> '+
                                    '</div> '+
                                    '<h4>'+vid.title+'</h4> '+
                                '<div class="btn-join btn-join-vim">WATCH ON VIMEO</div> '+
                                '</div>';  
     });
     $('#video-holder').html(template);  
    }
       var kliknut = 0;
 $(document).on('click','.munira',function() { 
                $("#show-video").html(videos[kliknut].link);
                $("#overlay").fadeIn();
                $("#overlayContent").fadeIn();

            
    });  


     // $(document).on('keyup',function(evt) {
     //        if (evt.keyCode == 27) {
     //            $("#show-video").html('');
     //            $("#overlay").fadeOut();
     //            $("#overlayContent").fadeOut();

     //        }
            
     //        });

     //      $(document).on('keydown',function(evt) {
     //          if (evt.keyCode == 9) {  //tab pressed
     //              evt.preventDefault(); // stops its action
     //          }
     //      })

      

   //---video section - on mouse enter change play img and border color ----//     
    $('.video-thumb').on('mouseenter',function(){
        
       $(this).css('border','2px solid orange');

       $('.play-btn').on('mouseenter',function(){
           var image = $(this).attr('src', './assets/images/play-orange.png');
            kliknut  =  $(this).attr('data-id');

       }).on('mouseleave',function(){
           var image = $(this).attr('src', './assets/images/play-gray.png');
           kliknut=0;
       });
    
    }).on('mouseleave',function(){
           $(this).css('border','2px solid gray');

       });


});
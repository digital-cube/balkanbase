$(document).ready(function() {
 var videos = { 
                "1" : {
                    "title":"WS BASE Jump - Monte Baldo, Altissimo exit.",
                    "img": "video-thumb-1.png",
                    "url": "https://vimeo.com/165696861",
                    "link": '<iframe src="https://player.vimeo.com/video/165696861" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                },
                "2" : {
                    "title":"TheVampireDiaries-MountRangeOfCasale",
                    "img": "video-thumb-2.png",
                    "url": "https://vimeo.com/57453446",
                    "link": '<iframe src="https://player.vimeo.com/video/57453446" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                },
                "3" : {
                    "title":"Monte Casale WS BASE jump",
                    "img": "video-thumb-3.png",
                    "url": "https://vimeo.com/163065123",
                    "link": '<iframe src="https://player.vimeo.com/video/163065123" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                },

            };

    var template = '';
    video_draw(videos);

    function video_draw(videos){
            var i =0;

     Object.keys(videos).forEach(function(p){      
                var vid=videos[p];
                i++;
                template += '<div class="vid col-xs-12 col-sm-12 col-md-4 col-lg-4">'+
                            '<div class="video-thumb" style="background: url(\'./assets/images/'+vid.img+'\') no-repeat;"> '+
                            ' <img class="play-btn pressed" data-id='+i+' src="./assets/images/play-gray.png"/> '+
                            '</div> '+
                            '<h4 class="tr" key="video_title_'+i+'">'+vid.title+'</h4> '+
                            '<div class="btn-join btn-join-vim link_go tr" data-id="'+vid.url+'" key="video_btn_title">WATCH ON VIMEO</div> '+
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


$(document).on('click','.link_go',function(){
        var data = $(this).attr('data-id');
        window.open(data,'_blank');
        window.open(data);
    });
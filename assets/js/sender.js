
$(document).ready(function() {
      $(document).on('click','#sendmessage',function() {
            submitForm()
      }); 
    
       
      $(document).off('click','#subscribe');
      $(document).on('click','#subscribe',function() {
             subscribeForm()
        });
    //$('input').keyup(function (e) {
    //    if (e.which == 13) {
    //        $(this).find().next('input').focus();
    //    }
    //});

    // //email add 
//         var email = 'mo' + 'jl' + 'et' +
//                     '@' + 'di' + 'gi' +
//                     'tal' + 'cube' + 
//                     '.' + 'rs';
                    
//         $('#mail_append').html(email);
//         $('#mail_append').attr('href','mailto:'+email);
      function onkeypress(){
         $(document).on('keyup',function(evt) {
            if (evt.keyCode == 27) {
                $("#subscribe-box").html('');
                $("#overlay").fadeOut();
                $("#overlayContent").fadeOut();

            }
             if (evt.keyCode == 13) {
                 subscribeForm()
             }

            });
          $(document).on('keydown',function(evt) {
              if (evt.keyCode == 9) {  //tab pressed
                  evt.preventDefault(); // stops its action
              }
          })

      }

    var activeSubscribe;
    $('.read_more').on('click', function(){

        onkeypress()

        var data = $(this).attr('data-id');
        var dataID = $(this).attr('id');
        var subscriber =''+
                        '<div class="form-group"><div style="padding-bottom:10px;text-align:left;">This project is in development phase, if you want to stay informed about this project please leave us email address</div>'+
                        '<input type="email" class="form-control" placeholder="Please enter your email" id="subsemail"/>'+
                        '<input type="hidden" value="'+data+'" id="project_id" />'+
                        '</div>'+
                        '<button id="subscribe"  class="btn  pull-right btn-default" >Subscribe</button> '+
                        '<div style="padding-bottom:10px;text-align: left;color:white;height:20px;" id="subscribe-info"></div>'+
                        // '<div id="close"  class="btn  pull-right btn-default" >Cansel</div>'+
                        '';

        $('#subscribe-box').html(subscriber);
        $("#overlay").fadeIn();
        $("#overlayContent").fadeIn();

        // var id_project = $(this).attr('id');
        // var project_id  = $('#project_id').val(id_project);
        activeSubscribe = true;
    });

  
      $(document).on('click','#close',function() {
       if(activeSubscribe){  
                $("#subscribe-box").html();
                $("#overlay").fadeOut();
                $("#overlayContent").fadeOut();
            }
    });  
      $(document).on('click','#blog-open',function() {
                   onkeypress()

                $("#subscribe-box").html('<h2 style="background:transparent;padding-bottom:0px;margin-left:-45px;text-align:center;">Please visit us later!</h2>');
                $("#overlay").fadeIn();
                $("#overlayContent").fadeIn();
             activeSubscribe = true;

            
    });  
      $(document).on('click','#overlay',function() {
           if(activeSubscribe){

                $("#subscribe-box").html('');
                $("#blog-box").html('');
                $("#overlay").fadeOut();
                $("#overlayContent").fadeOut();
            }
        });	
 
	function addText(text){
    	$( "#info" ).html( text ).css('margin-top','-40px').css('padding','10px 0px');
    }
    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg = $("#message").val();
        
        if(name == '' && email=='' && message == ''){
        	addText("Empty fields.")
        }else if(name==''){
        	addText("Name is empty.");
        	$('#name').focus();

        }else if(email==''){
        	addText("Email is empty.");
        	$('#email').focus();

        }else if(message==''){
        	addText("Message is empty.");
        	$('#message').focus();

        }else if( !isValidEmailAddress( email ) ) {
        	addText("Email is not corect.");
        	$('#email').focus();

        }else{
            //http://digitalcube.rs/econtact/contact
    	       var params = {
                    name:name
                }
           
                    
            $.ajax({
    	        type: "PUT",
                url: "http://digitalcube.rs/econtact/contact",
    	        data: {data:JSON.stringify(params),email:email,mailmsg:msg,web:'digitalcube'},
    	        success : function(text){
      					addText("Thank you, we will soon contact you.");           
    	        },
    	        error: function (response) {
    	                 addText("Something wrong, please try again.");

    				},
    	    });
    	}
    }

    function addSubTexts(text){
            $( "#subscribe-info" ).html( text );
            //.css('margin-top','-40px').css('padding','10px 0px');
        }
    function subscribeForm(){
            // Initiate Variables With Form Content
            var email = $("#subsemail").val();
            var project_id = $("#project_id").val();
            if(email==''){
                addSubTexts("Email is empty.");

            }else if( !isValidEmailAddress( email ) ) {
                addSubTexts("Email is not corect.");
            }else{
                //http://digitalcube.rs/econtact/contact
                $.ajax({
                    type: "PUT",
                    url: "http://digitalcube.rs/econtact/subscribe",
                    data: {
                        email:email,
                        project:project_id,
                    },
                    success : function(response){
                            addSubTexts("Thank you for subscribe.");           
                    },
                    error: function (response) {
                             addSubTexts("Something wrong, please try again.");

                        },
                });
            }
        }


    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

});
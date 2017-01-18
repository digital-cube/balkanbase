
$(document).ready(function() {
      $(document).on('click','#sendmessage',function() {

            submitForm(langs)
      }); 
    
       
      // function onkeypress(){
      //    $(document).on('keyup',function(evt) {
      //       if (evt.keyCode == 27) {
      //           $("#subscribe-box").html('');
      //           $("#overlay").fadeOut();
      //           $("#overlayContent").fadeOut();

      //       }
      //        if (evt.keyCode == 13) {
      //            subscribeForm()
      //        }

      //       });
      //     $(document).on('keydown',function(evt) {
      //         if (evt.keyCode == 9) {  //tab pressed
      //             evt.preventDefault(); // stops its action
      //         }
      //     })

      // }

    
	function addText(text){
    	$( "#info" ).html( text );
    }
    function submitForm(langs){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg = $("#message").val();
         

        if(name == '' && email=='' && message == ''){
        	addText(lang[langs]['form_empty'])
        }else if(name==''){
        	addText(lang[langs]['form_name']);

        }else if(email==''){
        	addText(lang[langs]['form_email'] );

        }else if(message==''){
        	addText(lang[langs]['form_message'] );

        }else if( !isValidEmailAddress( email ) ) {
        	addText(lang[langs]['form_email_error']);

        }else{
            //http://digitalcube.rs/econtact/contact
    	       var params = {
                    name:name
                }
           
                    
            $.ajax({
    	        type: "PUT",
                url: "http://developer.digitalcube.rs:9885/eContact/contact",
    	        data: {data:JSON.stringify(params),email:email,mailmsg:msg,web:'balkanbase'},
    	        success : function(text){
      				addText(lang[langs]['form_ok'] );           
    	        },
    	        error: function (response) {
    	           addText(lang[langs]['form_error']);

    			},
    	    });
    	}
    }

    

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

});
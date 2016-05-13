$(document).ready(function() {
 var persons = { 
                "branislav" : {
                    "name":"Branislav Acimovic",
                    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    "img": "branislav.png",
                    "position": "left",
                    "fb": "https://www.facebook.com/bacimovic",
                },
                "igor" : {
                    "name":"Igor Jeremic",
                    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    "img": "igor.png",
                    "position": "right",
                    "fb": "https://www.facebook.com/igor.jeremic",
                },
                "petar" : {
                    "name":"Petar Loncar",
                    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    "img": "petar.png",
                    "position": "left",
                    "fb": "https://www.facebook.com/petar.loncar.395",
                },
                "djordje" : {
                    "name":"Djordje Markovic ",
                    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    "img": "djordje.png",
                    "position": "right",
                    "fb": "https://www.facebook.com/bornto.skydive",

                },
                "nebojsa" : {
                    "name":"Nebojsa Jandric ",
                    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    "img": "nebojsa.png",
                    "position": "left",
                    "fb": "https://www.facebook.com/jandric.nebojsajimmy",
                },
                "milan" : {
                    "name":"Milan Todorovic ",
                    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    "img": "milan.png",
                    "position": "right",
                    "fb": "https://www.facebook.com/milan.todorovic.3975",
                },
               
                "nemanja" : {
                    "name":"Nemanja Palancanin ",
                    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    "img": "nemanja.png",
                    "position": "left",
                    "fb": "disable",
                },
               

            };
     var template = ''
     team_draw(persons);
     function team_draw(persons){
     Object.keys(persons).forEach(function(p){      
                var per=persons[p];

                //console.log(per.position);
                if(per.fb == 'disable'){var disable = 'disabled';}else{var disable = '';}
                if(per.position == 'left'){

                    var def_class = 'team-left';

                    var after = '<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-sm-push-1 col-md-push-1 col-lg-push-1" >'+
                                '<div class="btn-join btn-join-fb '+disable+'">Follow on facebook</div>'+
                                '</div>';
                
                    var before = '<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 ">'+
                                '<img class="img-circle" src="./assets/images/team/'+per.img+'" title="'+per.name+'" alt="'+per.name+'">'+
                                '</div>';

                    var middle_class = '';


            
                }else{

                    var def_class = '';

                    var after ='<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-sm-push-1 col-md-push-1 col-lg-push-1 ">'+
                                '<img class="img-circle" src="./assets/images/team/'+per.img+'" title="'+per.name+'" alt="'+per.name+'">'+
                                '</div>';

                    var before = '<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 " >'+
                                '<div class="btn-join btn-join-fb '+disable+'">Follow on facebook</div>'+
                                '</div>'; 

                    var middle_class = 'col-sm-push-1 col-md-push-1 col-lg-push-1 team-right';
                 }

                template += '<div class="persons '+def_class+'">'+
                            '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+ 
                                before+
                                '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 '+middle_class+'">'+
                                '<h3>'+per.name+'</h3>'+
                                '<p>'+per.desc+'</p>'+
                                '</div>'+
                                after+
                            '</div>'+
                            '</div>';

            });
             $('#team-holder').html(template);  

     }  
                   
   
   


});
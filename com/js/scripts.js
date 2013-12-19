$(document).ready(function(){

    $("#page a.inline").fancybox({
		'hideOnContentClick': true,
		'type':'inline'
	});

    $("input").ztInputHint();

    //OPACITY: Default below elements to reduced opacity
    $('#content .work').fadeTo('fast',.35);

    //HOVER function for .work thumbnails
    $('#content .work').live(
        {mouseenter: function(){
            $(this).fadeTo(500, 1);
            $(this).children('.title').show();
            $(this).addClass('shadow hover');
            $('work').css({'margin-left' : '0'})
        },mouseleave:function(){
            $(this).children('.title').hide();
            $(this).fadeTo(250, .35);
            $(this).removeClass('shadow hover');
        }
    });
    
    $('ul li:nth-child(4n)').after('<div class="clr"></div>');  //applies a clear div after every 4th <li> element
/*     $('ul li:nth-child(4n)').addClass('clr');  //applies a clear div after every 4th <li> element */

    //SOCIAL_LOGO: fade the logo's in/out on hover.
    $('#footer-wrapper .social_logo').hover(function(){
//        $(this).fadeTo(1000,1);
        $(this).css({'-moz-box-shadow' : '0px 0px 8px #a3a3a3'})
        $(this).css({'-webkit-box-shadow' : '0px 0px 8px #a3a3a3'})
    },function(){
 //       $(this).fadeTo(500,.35);
        $(this).css({'-moz-box-shadow' : '0px 0px 0px'})
        $(this).css({'-webkit-box-shadow' : '0px 0px 0px'})
    });
    //TWITTER: api call
    $("#twitter").getTwitter({
		userName: "elaniobro", //@twittername
		numTweets: 3,  //number of tweets
		loaderText: "Loading tweets...", //message to appear when loading tweets
		slideIn: false,    //options: Slide in true/false
		showHeading: true,    //options: Show header true/false
		headingText: "Latest Tweets", //<h2> tag title
		showProfileLink: true    //options show twitter profile link true/false
	});
    //TWITTER TWEETS: hide the tweets initally.
	$('#twitter').hide().delay(4000);  //Hide using delay, since it is not on the page on dom load.
	$('#twitter-link').toggle(function(){
	      $('#twitter').show('slow');
	   },function(){
    	   $('#twitter').hide('slow');
	})

    //CONTACT TAB:
    $('#contact').tabSlideOut({
        tabHandle: '.handle',  //class of the element that will become your tab
        pathToTabImage: 'img/contact.png', //path to the image for the tab         
        imageHeight: '144px',                     //height of tab image          
        imageWidth: '32px',                       //width of tab image                    
        tabLocation: 'right',                      //side of screen where tab lives, top, right, bottom, or left
        speed: 300,                               //speed of animation
        action: 'click',                          //options: 'click' or 'hover', action to trigger animation
        topPos: '50px',                          //position from the top/ use if tabLocation is left or right
        leftPos: '20px',                          //position from left/ use if tabLocation is bottom or top
        fixedPosition: true                      //options: true makes it stick(fixed position) on scroll
    });
    
    //CONTACT FORM: ajax request
    //FORM VALIDATION: validates on submit
         $("#contact-form").validate({
        	rules: {
        		fullName: {           //input name: fullName
                    required: true,   //required boolean: true/false
                    minlength: 5       
        		},
        		email: {              //input name: email
        			required: true,   //required boolean: true/false
        			email: true       //required boolean: true/false
        		},
        		subject: {            //input name: subject
        			required: true,   //required boolean: true/false
        			minlength: 5
        		},
        		message: {            //input name: message
                    required: true,
                    minlength: 20
                }
        	},
        	messages: {               //messages to appear on error
        		fullName: {
        		      required:"Please put your full name.",
        		      minlength:"C'mon full name please."
        		      },
        		email: "Enter a valid email.",
        		subject: {
        		      required: "Whats the topic?",
        		      minlength: ""
        		      },
        		message: {
        		      required: "What did you want to say?",
        		      minlength: "Please complete your thoughts, then submit."
        		      }
        	},
        	submitHandler: function(form) {
  			 	        $("input:submit").hide();
                        $('#loading').show();
  			 	$(form).ajaxSubmit({
  	 		 	        url:"email.php",
      			 	    type:"POST",
                        success: function(){
                            $('#contact-form').hide();
                            $('#sent').show();
                      }
  			 	 });
            }

        });  
    
////////
    $('#content').infinitescroll({
		navSelector  	: "a#next",
		nextSelector 	: "a#next",
        itemSelector    : "#content li",
        loadingImg      : "../../img/ajax-loader.gif",
        donetext        : "Check back later for more work." 
    }, function(){
        $('#content .work').fadeTo('fast',.35);
        //$('ul li:eq(3)').after('<div class="clr"></div>');  //applies a clear div after every 4th <li> element
        $('#content .work:last').after('<div class="clr"></div>');  //applies a clear div after every 4th <li> element
        
    });

})
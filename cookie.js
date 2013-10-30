//Sets a cookie for skinny marketing message to remain hidden after page refresh if user closes it
	    $(function(){
		    if($.cookie){
		           //By default if no cookie, skinny message will appear.
		           $("#marketing-message-global").toggle(!(!!$.cookie("toggle-state")) || $.cookie("toggle-state") === 'true');
		    }

		    $("#hide-marketing-message-btn").click(function(){
		        $("#marketing-message-global").hide();
		        //Save the value as a cookie for 1 day. Cookie domain is used across whole site.
		        $.cookie("toggle-state", $("#marketing-message-global").is(':visible'), {expires: 1, path:'/'}); 
		    });
	    });

window.jQuery(document).ready(function($){
    
	setInterval(function(){
		$('blink').toggleClass('unblink');
	}, 500);

	$(".title").live("click",function(){
		window.history.back();
	});
    
    $(document).keydown(function(e){
		if(e.keyCode == 13){
			window.location.hash = $("#command").attr("href");
		}
	});
    
    var hash = window.location.hash.substring(1);
    if(hash.length == 0) { hash = 1; }
    
    load_content(hash);
    
    window.onhashchange = function(){
        var hash = window.location.hash.substring(1);
        if(hash.length == 0) { hash = 1; }
        
        load_content(hash);
    }

});

function load_content(hash){
   $("#content").load(hash+".html",function(){
        $("html").attr("class", $(".template").attr("class")).removeClass("template");
        
        window.scrollTo(0, 0);

        //custom javascript per page:
        
        switch(hash){
            case "1":
                var thename = "Adeline";
                var i=0;
                var phoneinterval = setInterval(function(){
                    var len = $("#entername").val().length;
                    $("#name").text(thename.substring(0,len));
                    if(len >= thename.length){
                        $("#name").css("text-decoration", "underline").css("color", "rgba(255, 255, 255, 1)").css("cursor", "pointer");
                        $("blink").remove();
                        clearInterval(phoneinterval);
                    }
                }, 300);
                $(document).keydown(function(e){
                    if(e.keyCode == 8){ //backspace
                        return false;
                    } else if (e.keyCode == 13) {
                        $("#name").click();
                    }
                    clearInterval(phoneinterval);
                    if(i < thename.length) {
                        i++;
                    } else {
                        $("#name").css("text-decoration", "underline").css("color", "rgba(255, 255, 255, 1)").css("cursor", "pointer");
                        $("blink").remove();
                    }
                    $("#name").text(thename.substring(0,i));
                });
                $("#name").click(function(){
                    window.location.hash = '2';
                });  
            break;
            case "18":
                var thename2 = "Mitch";
                var i=0;
				var phoneinterval = setInterval(function(){
					var len = $("#entername").val().length;
					$("#name").text(thename2.substring(0,len));
					if(len >= thename2.length){
						$("#name").css("text-decoration", "underline").css("color", "rgba(255, 255, 255, 1)").css("cursor", "pointer");
						$("blink").remove();
						clearInterval(phoneinterval);
					}
				}, 300);
				$(document).keydown(function(e){
					if(e.keyCode == 8){ //backspace
						return false;
					} else if (e.keyCode == 13) {
						$("#name").click();
					}
					clearInterval(phoneinterval);
					if(i < thename2.length) {
						i++;
					} else {
						$("#name").css("text-decoration", "underline").css("color", "rgba(255, 255, 255, 1)").css("cursor", "pointer");
						$("blink").remove();
					}
					$("#name").text(thename2.substring(0,i));
				});
				$("#name").click(function(){
					window.location.hash = '19';
				});
            break;
            case "27":
                $("p, pre").each(function(){
                    if(!$(this).hasClass("noblack")){
                        $(this).animate({opacity: 0}, 2000);
                    }
                });
                $("html").css("background-image", "none");
            break;
        }
    });
}
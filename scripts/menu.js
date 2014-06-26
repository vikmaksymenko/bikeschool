	$(document).ready(function(e) {
		var $buttonOpacity = 0;
		
        $("#but").click(function() {
			if($buttonOpacity == 0) {
				$("#main-menu").removeClass("fadeOutDown");
				$("#main-menu").addClass("fadeInUp");
				$("#but").removeClass("closed");
				$("#but").addClass("opened");
				$buttonOpacity = 1;
			} else {
				$("#main-menu").removeClass("fadeInUp");
				$("#main-menu").addClass("fadeOutDown");
				$("#but").removeClass("opened");
				$("#but").addClass("closed");
				$buttonOpacity = 0;
			}
		});
    });
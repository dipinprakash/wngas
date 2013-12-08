define([
'jquery',
'bootstrap',
'underscore',
'backbone',
'text!Templates/contact.html'
],
function(
$,
bootstrap,
_,
Backbone,
ContactTemplate){

	var contactView = Backbone.View.extend({
		el:"#contactContainer",
		template:_.template(ContactTemplate),
		events:{
			'click .submit-btn':'validate'
		},
		initialize:function(){
			console.log("initialize blog");
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			$('.c-text').popover({
				trigger:'hover',
				placement:'right'
			});
			 $("#contactNum").keydown(function(event) {
		    	// Allow only backspace and delete
		    	console.log(event.keyCode);
		    	if ( event.keyCode == 107 || event.keyCode == 8 ) {
		    		// let it happen, don't do anything
		    	}
		    	else {
		    		// Ensure that it is a number and stop the keypress
		    		if (event.keyCode < 48 || event.keyCode > 57 ) {
		    			event.preventDefault();	
		    		}	
		    	}
		    });
		},
		validatePhone:function(txtPhone){
			    var a = document.getElementById(txtPhone).value;
			    var filter = /^[0-9-+]+$/;
			    if (filter.test(a)) {
			        return true;
			    }
			    else {
			        return false;
			    }

		},
		validate:function(){

			var ok = 0;

			if($(".name").val()=== '')
				$(".name").addClass("error-border");
			else
				$(".name").removeClass("error-border");	

			if($(".email").val()=== '')
				$(".email").addClass("error-border");
			else
				$(".email").removeClass("error-border");
			
			if($(".phone").val()=== '')
				$(".phone").addClass("error-border");
			else
				$(".phone").removeClass("error-border");
			
			// var regEx = '^[0-9]\d{2}\d{3}\d{4}';
			// var val = $(".phone").val().trim();
			// console.log("val = ="+val);

			// if (!val.match(regEx))
			// {
			// 	$(".phone").addClass("error-border");
			// 	$(".phone").attr("placeholder","Enter 10 digit number");
			// }	
			// else
			// 	$(".phone").removeClass("error-border");

			if($(".msg-text").val()=== '')
				$(".msg-text").addClass("error-border");
			else
				$(".msg-text").removeClass("error-border");

			
				
				if(!$("#contactForm input").hasClass("error-border")){
					if(!$("#contactForm textarea").hasClass("error-border")){
						
						// setTimeout(function(){
						// 	alert("Successfully sent");	
						// },1000);
						ok = 1;
					}

				}	
			if(ok===1)
				this.sendMessage();

		},

		// FUNCTION FOR AJAX REQUEST TO PHP PAGE TO SEND EMAIL
		sendMessage:function(){
			console.log("sendMessage");
			var from = "vineethkoppai@gmail.com",
				to = "vineeth.koppai@gmail.com",
				subject = "Hai, test mail",
				content = "I am testing the email send",
				self = this;

			var data = "from=" + from + "&to=" + to + "&subject=" + subject + "&content=" + content;
               
			$.ajax({
                type: "POST",
                url: "resources/PHP/send.php",
                data: data,
                success: function (succes) {
                    console.log("succes");console.log(succes);
                    $('.messageSuccess').show();
                    $('.messageSuccess').fadeOut(6000);

                },
                error: function (errormessage) {
                	console.log("error");console.log(errormessage);
                    alert('Sendmail failed possibly php script: ' + errormessage);
                }
            });
		},
		show:function(){
			this.$el.show();
			$("html, body").animate({ scrollTop: 0 }, 0);
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return contactView;
});
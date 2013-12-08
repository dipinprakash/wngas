define([
'jquery',
'underscore',
'backbone',
'jquery_fancybox',
'text!Templates/westernGhats.html'
],
function(
$,
_,
Backbone,
FancyBox,
WesternTemplate){

	var westernView = Backbone.View.extend({
		el:"#westernGhatsContainer",
		template:_.template(WesternTemplate),
		events:{},
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			$(".fancybox").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
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
	return westernView;
});
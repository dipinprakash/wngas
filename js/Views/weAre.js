define([
"jquery",
"underscore",
"backbone",
"text!Templates/weAre.html"],
function(
$,
_,
Backbone,
WeAreTemplate){
	var footerView = Backbone.View.extend({
		el:"#weAreContainer",
		template:_.template(WeAreTemplate),

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
		},
		show:function(){
			this.$el.show();
			$("html, body").animate({ scrollTop: 0 }, 0);
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return footerView;
});
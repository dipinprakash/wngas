define([
"jquery",
"underscore",
"backbone",
"jquery_cs_slider",
"modernizer",
"js_plugin_slider",
"js_resolve_slider",
"text!Templates/home.html"],
function($,
_,
Backbone,
jquery_cs_slider,
modernizer,
js_plugin_slider,
js_resolve_slider,
HomeTemplate){

	var homeView=Backbone.View.extend({
		el:"#homeContainer",
		template:_.template(HomeTemplate),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			$('#da-slider').cslider({
				autoplay	: true,
				bgincrement	: 450
			});
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return homeView;
});
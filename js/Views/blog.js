define([
'jquery',
'underscore',
'backbone',
'text!Templates/blog.html'
],
function(
$,
_,
Backbone,
BlogTemplate){

	var blogView = Backbone.View.extend({
		el:"#blogContainer",
		template:_.template(BlogTemplate),
		events:{},
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			$("html, body").animate({ scrollTop: 0 }, 0);
		},
		show:function(){
			this.$el.show();
			$("html, body").animate({ scrollTop: 0 }, 0);
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return blogView;
});
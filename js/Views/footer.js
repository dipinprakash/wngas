define([
"jquery",
"underscore",
"backbone",
"text!Templates/footer.html"],
function(
$,
_,
Backbone,
FooterTemplate){
	var footerView = Backbone.View.extend({
		el:"#footerContainer",
		template:_.template(FooterTemplate),
		events:{
			'click .home-li'	:'loadHome',
			'click .we-lii'		:'loadWeAre',
			'click .blog-li'	:'loadBlog',
			'click .contact-li' :'loadContact'
		},

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			this.setBg();
		},
		setBg:function(){
			console.log("setBg function");
			var loc = window.location.hash;
			var id = loc.replace("#","");
			console.log("id loc ="+id);

			$(".page-links-footer ul li").removeClass("footer-active");
			if(loc==='')
				$('.page-links-footer ul li[id=home]').addClass('footer-active');

			$('.page-links-footer ul li[id='+id+']').addClass('footer-active');
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		},
		loadHome:function(e){
			$(".page-links-footer ul li").removeClass("footer-active");
			$(e.target).addClass("footer-active");
			this.goTo("#home");
		},
		loadWeAre:function(e){
			$(".page-links-footer ul li").removeClass("footer-active");
			$(e.target).addClass("footer-active");
			this.goTo("#explore-us");
		},
		loadBlog:function(e){
			$(".page-links-footer ul li").removeClass("footer-active");
			$(e.target).addClass("footer-active");
			this.goTo("#blog");
		},
		loadContact:function(e){
			$(".page-links-footer ul li").removeClass("footer-active");
			$(e.target).addClass("footer-active");
			this.goTo("#contact");
		}
	});
	return footerView;
});
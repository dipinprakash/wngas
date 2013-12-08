define([
'jquery',
'underscore',
'backbone',
'Views/footer',
'text!Templates/header.html'
],
function(
$,
_,
Backbone,
Footer,
HeaderTemplate){

	var headerView = Backbone.View.extend({
		el:"#headerContainer",
		template:_.template(HeaderTemplate),
		events:{
			'click .home-li'		:'loadHome',
			'click #explore-us'		:'loadWeAre',
			'click #western-ghats'	:'loadWestern',
			'click .blog-li'		:'loadBlog',
			'click .contact-li' 	:'loadContact'
		},
		initialize:function(){
			console.log("initialize header");
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

			$(".nav-ul li").removeClass("active");
			if(loc==='')
				$('.nav-ul li[id=home]').addClass('active');

			$('.nav-ul li[id='+id+']').addClass('active');
			$('.nav-ul li ul li[id='+id+']').addClass('active');
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		},
		loadHome:function(e){
			console.log("loadHome");console.log(e.target);
			$(".nav-ul li").removeClass("active");
			$(e.target).addClass("active");
			this.goTo("#home");	
		},
		loadWeAre:function(e){
			console.log("loadWeAre");
			$(".nav-ul li").removeClass("active");
			$(e.target).parent().parent().addClass("active");
			this.goTo("#explore-us");
		},
		loadWestern:function(e){
			console.log("loadWestern");
			$(".nav-ul li").removeClass("active");
			$(e.target).parent().parent().addClass("active");
			this.goTo("#western-ghats");
		},
		loadBlog:function(e){
			console.log("loadBlog");
			$(".nav-ul li").removeClass("active");
			$(e.target).addClass("active");
			this.goTo("#blog");
		},
		loadContact:function(e){
			console.log("loadContact");
			$(".nav-ul li").removeClass("active");
			$(e.target).addClass("active");
			this.goTo("#contact");
		}
	});
	return headerView;
});
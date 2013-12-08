define([
'jquery',
'underscore',
'backbone',
'Views/header',
'Views/home',
'Views/footer',
'Views/weAre',
'Views/blog',
'Views/contact',
'Views/westernGhats'
],
function(
$,
_,
Backbone,
Header,
Home,
Footer,
WeAre,
Blog,
Contact,
WesternGhats){

	var pageView = Backbone.View.extend({
		el:"#body",

		initialize:function(){

			console.log(":pageView");
			this.header 		= new Header();
			this.home 			= new Home();
			this.footer 		= new Footer();
			this.weAre 			= new WeAre();
			this.blog 			= new Blog();
			this.contact 		= new Contact();
			this.westernGhats 	= new WesternGhats();
		},
		showHeader:function(){
			this.header.show();
		 },
		showHome:function(){
			this.hideOtherViews();
		 	this.home.show();
		 },
		showFooter:function(){
		 	this.footer.show();
		},
		showWeAre:function(){
		 	this.hideOtherViews();
		 	this.weAre.show();
		},
		showBlog:function(){
			this.hideOtherViews();
			this.blog.show();
		},
		showContact:function(){
			this.hideOtherViews();
			this.contact.show();
		},
		showWestern:function(){
			this.hideOtherViews();
			this.westernGhats.show();
		},
		hideOtherViews:function(){
			console.log("hideOtherViews");
			if(this.home)
				this.home.hide();
			if(this.weAre)
				this.weAre.hide();
			if(this.blog)
				this.blog.hide();
			if(this.contact)
				this.contact.hide();
			if(this.westernGhats)
				this.westernGhats.hide();
		}
	});
	return pageView;
});
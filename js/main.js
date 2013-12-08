// Original concepts provided by Backbone Boilerplate project: https://github.com/tbranyen/backbone-boilerplate
require.config({
  // Initialize the application with the main application file
  //deps: ["main"],

 // baseUrl: "js",
  catchError: {
    define: true
  },

  paths: {
    // Libraries
    jquery: "lib/jquery",
    jquerymin:"lib/jquery-1.7.1.min",
    underscore: "lib/underscore.min",
    backbone: "lib/backbone.min",
    bootstrap:"lib/bootstrap",
    jquery_easing:"lib/jquery.easing.1.3",
    FFcash:"lib/FF-cash",
    js_image_slider:"lib/js-image-slider",
    jquery_easing:"lib/jquery.easing.1.3",
    facebox:"lib/facebox",
    jquery_cs_slider:"lib/jquery.cslider",
    modernizer:"lib/modernizr.custom.28468",
    js_plugin_slider:"lib/slider/jquery.themepunch.plugins.minccfb",
    js_resolve_slider:"lib/slider/jquery.themepunch.revolution.minccfb",
    jquery_fancybox:"lib/jquery.fancybox"
  },
  
  shim: {
    underscore: {
      exports: "_"
    },

    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  },
  
  waitSeconds: 30

});

requirejs.onError = function (err) {
    if (err.requireType === 'timeout') {
        console.log("requirejs error: ");
        console.log(err);
    } else {
        throw err;
    }
};

require([
    'jquery',
    'underscore',
    'backbone',
    'Views/page',
    'router'
],




function($, _, Backbone, PageView, Router) {
  console.log("mainjs");
  if ( ! window.console ) {

    (function() {
      var names = ["log", "debug", "info", "warn", "error",
          "assert", "dir", "dirxml", "group", "groupEnd", "time",
          "timeEnd", "count", "trace", "profile", "profileEnd"],
          i, l = names.length;

      window.console = {};

      for ( i = 0; i < l; i++ ) {
        window.console[ names[i] ] = function() {};
      }
    }());
  }

  //IE fix
     if ($.browser.msie) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        }
    }


 $( document ).ajaxError(function(event, jqxhr, settings, exception) {
    console.log("errrr");
    console.log(jqxhr.status);
    if(jqxhr.status==401){
      javascript:logout();
    }
 });

  var appRouter = new Router();

  Backbone.View.prototype.goTo = function (loc) {
       appRouter.navigate(loc, true);
  };
  Backbone.history.start();
  //Backbone.history.start({pushState: true})     
  console.log("require.js initializing the app ");

  // $.ui.autocomplete.prototype._renderItem = function( ul, item){
  //     var term = this.term.split(' ').join('|');
  //     var re = new RegExp("(" + term + ")", "gi") ;
  //     var t = item.label.replace(re,"<strong>$1</strong>");
  //     return $( "<li></li>" )
  //         .data( "item.autocomplete", item )
  //         .append( "<a>" + t + "</a>" )
  //         .appendTo( ul );
  // };
  
});


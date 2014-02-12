var HTML5App = window.HTML5App = {};//Ember.Application.create();

HTML5App.test = function(){
	console.log("test!");
};

$(document).ready(function(){
	HTML5App.test();
});


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

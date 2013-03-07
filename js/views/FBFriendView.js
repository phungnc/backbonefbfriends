// view/FBFriendView.js
( function ( Views ) {

	Views.FBFriendView = Backbone.View.extend({
		
		tagName: "li",
		// get the HTML content of the #guestlist-template template
		guestTemplate: _.template($('#fbFriendTemplate').html()),

		events:{},

		initialize: function(){},

		render: function(){
			//console.log("fbGuest render");
			// pass model attributes to template variable
			this.$el.html(this.guestTemplate(this.model.attributes));
			return this;
		}
	});
})( App.Views );
var Person = Backbone.Model.extend({
	defaults: {
		firstName: "",
		lastName: "",
		role: "student",
		imgUrl: "http://placepuppy.it/200/200"
	},
	initialize: function() {
		this.generateUsername();
	},
	generateUsername: function () {
		var username = this.get('firstName') + this.get('lastName');
		this.set('username', username);
		return username;
	}
});

var People = Backbone.Collection.extend({
	model: Person,
	comparator: function(model) {
		return model.get('lastName').toLowerCase();
	}
})

var people = new People([
	{
		firstName: "Brenda",
		lastName: "Jin",
		role: "teacher",
		imgUrl: "https://pbs.twimg.com/profile_images/494918967329165312/_DNh8TnK.jpeg"
	},
	{
		firstName: "Pamela",
		lastName: "Fox",
		role: "teacher",
		imgUrl: "https://pbs.twimg.com/profile_images/458674563044233216/Rya_AmpS.jpeg"
	},
	{
		lastName: "Djaja",
		role: "TA",
		imgUrl: "https://lh6.googleusercontent.com/-RXfQUhzv7uQ/AAAAAAAAAAI/AAAAAAAAAAA/vO3ax0T-UzY/s128-c-k/photo.jpg"
	}
])

people.add({
	firstName: 'Julee',
	lastName: 'Burdekin',
	role: 'Adobe host'
})

// insert your new code here

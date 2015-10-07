### Angular Truncate

This is my Truncate filter. It will truncate the text passed to it, defaulting to 10 characters.

#### Use

You need to include the igTruncate.js file before your app, but after angular.

Just put this filter on anything that returns a string;

For example…

	// Load the filter
	<script src="jquery.js"></script>
	<script src="angular.js"></script>
	<script src="igTruncate.js"></script>
	<script src="ngApp.js"></script>
	
	// In your controller
	// Include the module in your app
	var ngMyApp = angular.module('myApp', ['igTruncate']);
	
	// Model that will ultimately contain your string
	$scope.string;
	
	// In your markup
	<span>{{string|truncate}}</span>
	
  // You can set the number of characters to truncate to
	<span>{{string|truncate:15}}</span>

#### Requirements

* Angularjs (Tested against 1.0.1 through 1.0.7)

#### Todo

* Write tests
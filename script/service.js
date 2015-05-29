/**
 * 
 */

angular.module("randomApp")
.service("RandomService", ["$resource", function($resource) {
	return $resource("/", {}, {

		getSuggestions: {url:"/suggestios.php", method:"GET", isArray:true},
		getResults:{url:"/TextFile_output/Search.txt", method:"GET"},
		fetchFacets: {url:"/facets.php", method:"GET", isArray:true},
		fetchInfo: {url:"/TextFile_output/info.txt", method:"GET"},
		fetchTopic: {url:"/info.php", method:"GET"}
/*
		getSuggestions: {url:"/suggestios/:term", method:"GET", isArray:true},
		getResults:{url:"/results/:term", method:"GET", isArray:true},
		fetchFacets: {url:"/facets", method:"GET", isArray:true},
		fetchInfo: {url:"/info/:id", method:"GET"}
*/
	});
}]);
